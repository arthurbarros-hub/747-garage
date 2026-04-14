import type { NextRequest } from "next/server";

export function getClientIp(request: NextRequest): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) {
    return xRealIp;
  }

  return "unknown";
}

export function isTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  const explicitAllowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  const defaultAllowedOrigins = [request.nextUrl.origin];

  const allowedOrigins = new Set([...defaultAllowedOrigins, ...explicitAllowedOrigins]);

  if (origin) {
    return allowedOrigins.has(origin);
  }

  if (!referer) {
    return false;
  }

  try {
    const refererOrigin = new URL(referer).origin;
    return allowedOrigins.has(refererOrigin);
  } catch {
    return false;
  }
}
