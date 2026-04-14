type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
};

const store = new Map<string, RateLimitEntry>();

export function consumeRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): RateLimitResult {
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || now >= existing.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      allowed: true,
      remaining: maxRequests - 1,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  existing.count += 1;
  store.set(key, existing);

  const remaining = Math.max(0, maxRequests - existing.count);
  const retryAfterSeconds = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));

  return {
    allowed: existing.count <= maxRequests,
    remaining,
    retryAfterSeconds,
  };
}

export function cleanupRateLimitStore(maxSize = 5000): void {
  if (store.size <= maxSize) {
    return;
  }

  const now = Date.now();

  for (const [key, entry] of store.entries()) {
    if (now >= entry.resetAt) {
      store.delete(key);
    }
  }
}
