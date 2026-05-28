import { Request, Response, NextFunction } from 'express';
import { policyService } from '../services/policy.service';
import { CreatePolicyRequest, EvaluatePolicyRequest, PolicyFilters } from '../types';

export async function listPolicies(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const filters: PolicyFilters = {};

    if (req.query['effect'] === 'allow' || req.query['effect'] === 'deny') {
      filters.effect = req.query['effect'] as 'allow' | 'deny';
    }

    if (req.query['is_active'] !== undefined) {
      filters.is_active = req.query['is_active'] === 'true';
    }

    if (typeof req.query['capability_id'] === 'string') {
      filters.capability_id = req.query['capability_id'];
    }

    const policies = await policyService.getPolicies(tenantId, filters);
    res.json({ success: true, data: policies });
  } catch (err) {
    next(err);
  }
}

export async function createPolicy(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const body = req.body as CreatePolicyRequest;

    if (!body.name || !body.effect || !body.subjects || !body.capability_ids || !body.actions) {
      res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_INPUT',
          message: 'Missing required fields: name, effect, subjects, capability_ids, actions',
        },
      });
      return;
    }

    const policy = await policyService.createPolicy(tenantId, body);
    res.status(201).json({ success: true, data: policy });
  } catch (err) {
    next(err);
  }
}

export async function deletePolicy(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const { id } = req.params;
    await policyService.deletePolicy(tenantId, id!);
    res.json({ success: true, data: { message: 'Policy deleted successfully' } });
  } catch (err) {
    next(err);
  }
}

export async function evaluatePolicy(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const tenantId = req.user!.tenantId;
    const body = req.body as EvaluatePolicyRequest;

    if (!body.user_id || !body.capability_id || !body.action) {
      res.status(400).json({
        success: false,
        error: {
          code: 'INVALID_INPUT',
          message: 'Missing required fields: user_id, capability_id, action',
        },
      });
      return;
    }

    const decision = await policyService.evaluatePolicy(tenantId, body);
    res.json({ success: true, data: decision });
  } catch (err) {
    next(err);
  }
}
