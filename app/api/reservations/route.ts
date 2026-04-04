import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { carId, name, email, phone, message } = await request.json();

    if (!carId || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const car = await prisma.car.findUnique({
      where: { id: carId },
    });

    if (!car) {
      return NextResponse.json(
        { error: "Veículo não encontrado" },
        { status: 404 }
      );
    }

    if (car.status !== "AVAILABLE") {
      return NextResponse.json(
        { error: "Veículo não disponível para reserva" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.create({
      data: {
        carId,
        name,
        email,
        phone,
        message,
      },
    });

    // Optionally, update car status to RESERVED
    await prisma.car.update({
      where: { id: carId },
      data: { status: "RESERVED" },
    });

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}