import { Request, Response, NextFunction } from 'express';
import { schemaService } from '../services/schema.service';

export async function getSchema(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { type } = req.params;
    const schema = await schemaService.getSchema(tenantId, type!);
    res.json({ success: true, data: schema });
  } catch (err) {
    next(err);
  }
}

export async function validateData(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { type } = req.params;

    if (!req.body || !('data' in req.body)) {
      res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Request body must contain a "data" field' },
      });
      return;
    }

    const result = await schemaService.validateData(tenantId, type!, (req.body as { data: unknown }).data);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
}
