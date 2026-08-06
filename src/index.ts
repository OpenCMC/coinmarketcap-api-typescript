// Core wrapper exports
export { CoinMarketCap, createCMCClient, init, getDefaultClient } from './client.js';
export type { CMCClientOptions, Environment } from './types.js';
export { ENVIRONMENTS } from './types.js';
export type { ApiNamespaces } from './namespaces.gen.js';

// Error types
export {
  CMCError,
  BadRequestError,
  AuthenticationError,
  ForbiddenError,
  NotFoundError,
  RateLimitError,
  InternalServerError,
  APIConnectionError,
  APITimeoutError,
} from './errors.js';

// Re-export all generated SDK functions and types so users can import
// everything from a single package entry point.
export * from './generated/index.js';
