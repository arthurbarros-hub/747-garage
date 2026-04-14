# Security Baseline v2

This document tracks security controls implemented in the current version and what remains for enterprise-level hardening.

## Implemented controls

### Application security
- Strict input validation in reservation endpoint with schema validation.
- Server-side sanitization for plain text, email, and phone fields.
- CSRF protection with secure cookie token and request header verification.
- Origin verification using trusted origin list (Origin and Referer fallback).
- Rate limiting per client IP on sensitive endpoint.
- Anti-bot honeypot field for reservation flow.
- Transaction-safe reservation write path to reduce race-condition booking.

### Browser and frontend security
- Content Security Policy (CSP) enabled globally via middleware.
- Security headers enabled:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy`
  - `Cross-Origin-Resource-Policy`
  - `Cross-Origin-Opener-Policy`
  - `Strict-Transport-Security` in production
- No-store caching for API routes.

### Error handling and trust UX
- Route-level error boundary (`app/error.tsx`).
- Global error boundary (`app/global-error.tsx`).
- Global 404 fallback page (`app/not-found.tsx`).

## Environment requirements

Use `.env.example` as baseline and configure:

- `ALLOWED_ORIGINS` as comma-separated trusted origins.
- `NEXT_PUBLIC_SITE_URL` with canonical site URL.

## Remaining priority controls (next iteration)

### P0
- Introduce authentication and session management for user accounts.
- Add RBAC for admin/moderator/operator access.
- Add API audit logs for sensitive actions.
- Introduce centralized logging and alerting pipeline.

### P1
- Add account lockout and suspicious-login detection.
- Add 2FA for privileged accounts.
- Add anti-automation challenges (CAPTCHA) on abuse spikes.
- Add moderated content queue for suspicious listings/messages.

### P2
- Add LGPD workflows for data access/export/delete requests.
- Add retention and deletion policies.
- Add backup restore drills and incident response runbooks.
- Add periodic SAST/DAST and dependency scanning gates in CI.

## Operational policy

- Never expose secrets in source code.
- Keep dependencies patched and monitor advisories.
- Keep least privilege on database and infrastructure credentials.
- Require secure code review for changes touching auth, payments, or PII.
