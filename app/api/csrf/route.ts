import { NextResponse } from "next/server";
import { CSRF_COOKIE_NAME, generateCsrfToken, getCsrfCookieOptions } from "@/lib/security/csrf";

export async function GET() {
  const token = generateCsrfToken();

  const response = NextResponse.json({ token }, { status: 200 });

  response.cookies.set(CSRF_COOKIE_NAME, token, getCsrfCookieOptions());
  response.headers.set("Cache-Control", "no-store");

  return response;
}
