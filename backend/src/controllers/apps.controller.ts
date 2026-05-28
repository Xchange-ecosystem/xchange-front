import { Request, Response, NextFunction } from 'express';
import { appService } from '../services/app.service';
import { InstallAppRequest } from '../types';

export async function listApps(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const apps = await appService.getApps(tenantId);
    res.json({ success: true, data: apps });
  } catch (err) {
    next(err);
  }
}

export async function installApp(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const userId = req.user!.id;
    const { id } = req.params;
    const { config } = req.body as InstallAppRequest;

    if (!config || typeof config !== 'object' || Array.isArray(config)) {
      res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Request body must contain a "config" object' },
      });
      return;
    }

    const installation = await appService.installApp(tenantId, userId, id!, config as Record<string, unknown>);
    res.status(201).json({ success: true, data: installation });
  } catch (err) {
    next(err);
  }
}

export async function uninstallApp(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { id } = req.params;
    await appService.uninstallApp(tenantId, id!);
    res.json({ success: true, data: { message: 'App uninstalled successfully' } });
  } catch (err) {
    next(err);
  }
}
