import { Request, Response, NextFunction } from 'express';
import { AppError } from '../utils/error-handler';
import { logger } from '../utils/logger';

/**
 * Middleware that enforces tenant isolation.
 *
 * It verifies that whenever a tenantId appears in the route params or request
 * body, it matches the tenantId stored in the authenticated JWT.  This prevents
 * one tenant from accessing another tenant's resources.
 *
 * Must be used AFTER authenticateToken.
 */
export function validateTenant(
  req: Request,
  _res: Response,
  next: NextFunction
): void {
  if (!req.user) {
    return next(new AppError('UNAUTHORIZED', 'Authentication required'));
  }

  const jwtTenantId = req.user.tenantId;

  // Check route params (e.g. /tenants/:tenantId/...)
  const paramTenantId = req.params['tenantId'];
  if (paramTenantId !== undefined && paramTenantId !== jwtTenantId) {
    logger.warn(
      {
        jwtTenantId,
        paramTenantId,
        userId: req.user.id,
        path: req.path,
      },
      'Cross-tenant access attempt blocked'
    );
    return next(
      new AppError('FORBIDDEN', 'Access to this tenant resource is forbidden')
    );
  }

  // Check request body if it contains a tenant_id or tenantId field
  if (req.body && typeof req.body === 'object') {
    const bodyTenantId: unknown =
      (req.body as Record<string, unknown>)['tenant_id'] ??
      (req.body as Record<string, unknown>)['tenantId'];

    if (
      bodyTenantId !== undefined &&
      bodyTenantId !== null &&
      bodyTenantId !== jwtTenantId
    ) {
      logger.warn(
        {
          jwtTenantId,
          bodyTenantId,
          userId: req.user.id,
          path: req.path,
        },
        'Cross-tenant body field detected and blocked'
      );
      return next(
        new AppError('FORBIDDEN', 'Body tenant_id does not match authenticated tenant')
      );
    }
  }

  next();
}
