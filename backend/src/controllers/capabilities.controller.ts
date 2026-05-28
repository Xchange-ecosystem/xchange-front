import { Request, Response, NextFunction } from 'express';
import { capabilityService } from '../services/capability.service';
import { ExecuteCapabilityRequest } from '../types';

export async function listCapabilities(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const capabilities = await capabilityService.getCapabilities(tenantId);
    res.json({ success: true, data: capabilities });
  } catch (err) {
    next(err);
  }
}

export async function getCapability(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { id } = req.params;
    const capability = await capabilityService.getCapability(tenantId, id!);
    res.json({ success: true, data: capability });
  } catch (err) {
    next(err);
  }
}

export async function executeCapability(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const userId = req.user!.id;
    const { id } = req.params;
    const { input } = req.body as ExecuteCapabilityRequest;

    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Request body must contain an "input" object' },
      });
      return;
    }

    const result = await capabilityService.executeCapability(tenantId, userId, id!, input as Record<string, unknown>);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}
