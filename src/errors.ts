export class CMCError extends Error {
  readonly status: number;
  readonly headers: Headers;
  readonly body: unknown;

  constructor(status: number, body: unknown, headers: Headers, message?: string) {
    super(message || `Request failed with status ${status}`);
    this.name = 'CMCError';
    this.status = status;
    this.headers = headers;
    this.body = body;
  }

  static from(status: number, body: unknown, headers: Headers): CMCError {
    const message = extractMessage(body);
    switch (status) {
      case 400:
        return new BadRequestError(status, body, headers, message);
      case 401:
        return new AuthenticationError(status, body, headers, message);
      case 403:
        return new ForbiddenError(status, body, headers, message);
      case 404:
        return new NotFoundError(status, body, headers, message);
      case 429:
        return new RateLimitError(status, body, headers, message);
      default:
        if (status >= 500) {
          return new InternalServerError(status, body, headers, message);
        }
        return new CMCError(status, body, headers, message);
    }
  }
}

export class BadRequestError extends CMCError {
  override readonly name = 'BadRequestError';
}

export class AuthenticationError extends CMCError {
  override readonly name = 'AuthenticationError';
}

export class ForbiddenError extends CMCError {
  override readonly name = 'ForbiddenError';
}

export class NotFoundError extends CMCError {
  override readonly name = 'NotFoundError';
}

export class RateLimitError extends CMCError {
  override readonly name = 'RateLimitError';
}

export class InternalServerError extends CMCError {
  override readonly name = 'InternalServerError';
}

export class APIConnectionError extends Error {
  readonly name: string = 'APIConnectionError';

  constructor(message?: string, public readonly cause?: unknown) {
    super(message || 'Connection error');
  }
}

export class APITimeoutError extends APIConnectionError {
  override readonly name: string = 'APITimeoutError';

  constructor(timeout: number) {
    super(`Request timed out after ${timeout}ms`);
  }
}

function extractMessage(body: unknown): string | undefined {
  if (body && typeof body === 'object') {
    const obj = body as Record<string, unknown>;
    if (obj.status && typeof obj.status === 'object') {
      const status = obj.status as Record<string, unknown>;
      if (typeof status.error_message === 'string') {
        return status.error_message;
      }
    }
    if (typeof obj.message === 'string') return obj.message;
    if (typeof obj.error === 'string') return obj.error;
  }
  if (typeof body === 'string') return body;
  return undefined;
}
