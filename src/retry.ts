export interface RetryConfig {
  maxRetries: number;
  retryableStatuses: Set<number>;
  initialDelayMs: number;
  maxDelayMs: number;
}

export const DEFAULT_RETRY: RetryConfig = {
  maxRetries: 2,
  retryableStatuses: new Set([408, 409, 429, 500, 502, 503, 504]),
  initialDelayMs: 500,
  maxDelayMs: 8000,
};

export function shouldRetry(status: number, config: RetryConfig): boolean {
  return config.retryableStatuses.has(status);
}

export function getRetryDelay(attempt: number, status: number, config: RetryConfig, headers: Headers): number {
  if (status === 429) {
    const retryAfter = headers.get('Retry-After');
    if (retryAfter) {
      const seconds = Number(retryAfter);
      // Honour Retry-After, but never wait longer than maxDelayMs — otherwise a
      // large value (e.g. "Retry-After: 3600") would hang the call for an hour.
      if (!isNaN(seconds)) return Math.min(seconds * 1000, config.maxDelayMs);
    }
  }
  const base = config.initialDelayMs * Math.pow(2, attempt);
  const jitter = base * 0.2 * Math.random();
  return Math.min(base + jitter, config.maxDelayMs);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
