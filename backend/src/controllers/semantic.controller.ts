import { Request, Response, NextFunction } from 'express';
import { voxIntegrationService } from '../services/vox-integration.service';
import { SemanticSearchRequest, IndexEntityRequest } from '../types';

export async function search(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const body = req.body as SemanticSearchRequest;

    if (!body.query || typeof body.query !== 'string') {
      res.status(400).json({
        success: false,
        error: { code: 'INVALID_INPUT', message: 'Request body must contain a "query" string' },
      });
      return;
    }

    const results = await voxIntegrationService.semanticSearch(tenantId, body);
    res.json({ success: true, data: results });
  } catch (err) {
    next(err);
  }
}

export async function getRelatedEntities(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { id } = req.params;
    const limit = req.query['limit'] ? parseInt(String(req.query['limit']), 10) : 10;
    const related = await voxIntegrationService.getRelatedEntities(tenantId, id!, limit);
    res.json({ success: true, data: related });
  } catch (err) {
    next(err);
  }
}

export async function indexEntity(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const body = req.body as IndexEntityRequest;

    if (!body.entity_type || !body.entity_id || !body.title || !body.content) {
      res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_INPUT',
          message: 'Missing required fields: entity_type, entity_id, title, content',
        },
      });
      return;
    }

    const doc = await voxIntegrationService.indexEntity(tenantId, body);
    res.status(201).json({ success: true, data: doc });
  } catch (err) {
    next(err);
  }
}
