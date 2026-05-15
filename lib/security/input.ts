export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function sanitizePlainText(value: string): string {
  const withoutControlChars = value.replace(/[\u0000-\u001F\u007F]/g, "");
  const withoutAngleBrackets = withoutControlChars.replace(/[<>]/g, "");
  return normalizeWhitespace(withoutAngleBrackets);
}

export function sanitizeEmail(value: string): string {
  return normalizeWhitespace(value).toLowerCase();
}

export function sanitizePhone(value: string): string {
  const cleaned = value.replace(/[^\d+()\-\s]/g, "");
  return normalizeWhitespace(cleaned);
}
