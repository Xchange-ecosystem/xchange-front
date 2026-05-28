import { Request } from 'express';

export * from './capability.types';
export * from './app.types';
export * from './event.types';
export * from './policy.types';
export * from './semantic.types';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  meta?: PaginationMeta;
}

export interface ApiError {
  code: ErrorCode;
  message: string;
  details?: Record<string, unknown>;
}

export type ErrorCode =
  | 'UNAUTHORIZED'
  | 'FORBIDDEN'
  | 'NOT_FOUND'
  | 'INVALID_INPUT'
  | 'INTERNAL_ERROR'
  | 'CONFLICT';

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
}

export interface AuthUser {
  id: string;
  tenantId: string;
  email: string;
  roles: string[];
}

export interface AuthenticatedRequest extends Request {
  user?: AuthUser;
}
