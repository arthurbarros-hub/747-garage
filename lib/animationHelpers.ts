export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}
