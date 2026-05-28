import { Request, Response, NextFunction } from 'express';
import { ErrorCode, ApiResponse } from '../types';
import { logger } from './logger';

const ERROR_STATUS_MAP: Record<ErrorCode, number> = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INVALID_INPUT: 400,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
};

export class AppError extends Error {
  public readonly code: ErrorCode;
  public readonly statusCode: number;
  public readonly details?: unknown;

  constructor(code: ErrorCode, message: string, details?: unknown) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = ERROR_STATUS_MAP[code];
    this.details = details;

    // Maintain proper stack trace in V8
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

export function createError(code: ErrorCode, message: string, details?: unknown): AppError {
  return new AppError(code, message, details);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const isProduction = process.env.NODE_ENV === 'production';

  if (err instanceof AppError) {
    logger.warn(
      { code: err.code, statusCode: err.statusCode, path: req.path },
      err.message
    );

    const response: ApiResponse = {
      success: false,
      error: {
        code: err.code,
        message: err.message,
        details:
          err.details && !isProduction
            ? (err.details as Record<string, unknown>)
            : undefined,
      },
    };

    res.status(err.statusCode).json(response);
    return;
  }

  // Unexpected errors
  logger.error(
    { err, path: req.path, method: req.method },
    'Unhandled error'
  );

  const response: ApiResponse = {
    success: false,
    error: {
      code: 'INTERNAL_ERROR',
      message: isProduction ? 'An internal error occurred' : err.message,
    },
  };

  res.status(500).json(response);
}
