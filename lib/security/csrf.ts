import crypto from "node:crypto";
import type { NextRequest } from "next/server";

export const CSRF_COOKIE_NAME = "csrf-token";
export const CSRF_HEADER_NAME = "x-csrf-token";

const CSRF_TOKEN_BYTES = 32;

export function generateCsrfToken(): string {
  return crypto.randomBytes(CSRF_TOKEN_BYTES).toString("hex");
}

export function getCsrfCookieOptions() {
  const isProduction = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProduction,
    sameSite: "strict" as const,
    path: "/",
    maxAge: 60 * 60,
  };
}

function safeEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a);
  const bufferB = Buffer.from(b);

  if (bufferA.length !== bufferB.length) {
    return false;
  }

  return crypto.timingSafeEqual(bufferA, bufferB);
}

export function verifyCsrf(request: NextRequest): boolean {
  const headerToken = request.headers.get(CSRF_HEADER_NAME) ?? "";
  const cookieToken = request.cookies.get(CSRF_COOKIE_NAME)?.value ?? "";

  if (!headerToken || !cookieToken) {
    return false;
  }

  return safeEqual(headerToken, cookieToken);
}
