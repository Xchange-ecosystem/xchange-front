import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../utils/error-handler';
import { logger } from '../utils/logger';

// Module augmentation to add user to Express Request
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: {
        id: string;
        tenantId: string;
        email: string;
        roles: string[];
      };
    }
  }
}

interface JwtPayload {
  sub?: string;
  userId?: string;
  tenantId: string;
  email: string;
  roles?: string[];
  iat?: number;
  exp?: number;
}

export function authenticateToken(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return next(
      new AppError('UNAUTHORIZED', 'Authorization header is required')
    );
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0]?.toLowerCase() !== 'bearer') {
    return next(
      new AppError(
        'UNAUTHORIZED',
        'Authorization header must be in format: Bearer <token>'
      )
    );
  }

  const token = parts[1];

  if (!token) {
    return next(new AppError('UNAUTHORIZED', 'Bearer token is missing'));
  }

  const secret = process.env.JWT_SECRET;

  if (!secret) {
    logger.error('JWT_SECRET environment variable is not set');
    return next(new AppError('INTERNAL_ERROR', 'Server configuration error'));
  }

  try {
    const payload = jwt.verify(token, secret) as JwtPayload;

    const userId = payload.userId ?? payload.sub;

    if (!userId) {
      return next(new AppError('UNAUTHORIZED', 'Token payload missing user identifier'));
    }

    if (!payload.tenantId) {
      return next(new AppError('UNAUTHORIZED', 'Token payload missing tenantId'));
    }

    req.user = {
      id: userId,
      tenantId: payload.tenantId,
      email: payload.email,
      roles: payload.roles ?? [],
    };

    next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return next(new AppError('UNAUTHORIZED', 'Token has expired'));
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return next(new AppError('UNAUTHORIZED', 'Invalid token'));
    }

    logger.error({ err }, 'Unexpected error during token verification');
    return next(new AppError('INTERNAL_ERROR', 'Token verification failed'));
  }
}
