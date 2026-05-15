import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { verifyCsrf } from "@/lib/security/csrf";
import { cleanupRateLimitStore, consumeRateLimit } from "@/lib/security/rate-limit";
import { sanitizeEmail, sanitizePhone, sanitizePlainText } from "@/lib/security/input";
import { getClientIp, isTrustedOrigin } from "@/lib/security/request";

const reservationSchema = z.object({
  carId: z.string().cuid(),
  name: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z.string().min(8).max(40),
  message: z.string().max(1000).optional(),
  website: z.string().max(0).optional(),
});

const MAX_REQUESTS_PER_WINDOW = 10;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: NextRequest) {
  cleanupRateLimitStore();

  const clientIp = getClientIp(request);
  const rateLimit = consumeRateLimit(
    `reservation:${clientIp}`,
    MAX_REQUESTS_PER_WINDOW,
    RATE_LIMIT_WINDOW_MS
  );

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Muitas tentativas. Tente novamente em alguns minutos." },
      {
        status: 429,
        headers: {
          "Retry-After": rateLimit.retryAfterSeconds.toString(),
        },
      }
    );
  }

  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Formato de requisição inválido." },
        { status: 415 }
      );
    }

    if (!isTrustedOrigin(request)) {
      return NextResponse.json(
        { error: "Origem não autorizada." },
        { status: 403 }
      );
    }

    if (!verifyCsrf(request)) {
      return NextResponse.json(
        { error: "Token de segurança inválido." },
        { status: 403 }
      );
    }

    const payload: unknown = await request.json();
    const parsed = reservationSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos no formulário." },
        { status: 400 }
      );
    }

    const { carId, website } = parsed.data;
    const name = sanitizePlainText(parsed.data.name);
    const email = sanitizeEmail(parsed.data.email);
    const phone = sanitizePhone(parsed.data.phone);
    const message = parsed.data.message ? sanitizePlainText(parsed.data.message) : null;

    // Honeypot silencioso para reduzir ruído de bots sem revelar regras.
    if (website) {
      return NextResponse.json({ ok: true }, { status: 202 });
    }

    if (!carId || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const reservation = await prisma.$transaction(async (tx) => {
      const reserved = await tx.car.updateMany({
        where: {
          id: carId,
          status: "AVAILABLE",
        },
        data: {
          status: "RESERVED",
        },
      });

      if (reserved.count === 0) {
        throw new Error("CAR_NOT_AVAILABLE");
      }

      return tx.reservation.create({
        data: {
          carId,
          name,
          email,
          phone,
          message,
        },
      });
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    if (error instanceof Error && error.message === "CAR_NOT_AVAILABLE") {
      return NextResponse.json(
        { error: "Veículo não disponível para reserva." },
        { status: 409 }
      );
    }

    console.error("Erro ao criar reserva:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}