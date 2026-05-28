import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { logger } from '../utils/logger';
import {
  Policy,
  PolicyDecision,
  PolicyEvaluation,
  CreatePolicyRequest,
  EvaluatePolicyRequest,
  PolicyFilters,
  PolicyCondition,
} from '../types';

function evaluateCondition(condition: PolicyCondition, context: Record<string, unknown>): boolean {
  const fieldValue = context[condition.field];
  const condValue = condition.value;

  switch (condition.operator) {
    case 'eq':
      return fieldValue === condValue;
    case 'neq':
      return fieldValue !== condValue;
    case 'in':
      return Array.isArray(condValue) && condValue.includes(fieldValue);
    case 'nin':
      return Array.isArray(condValue) && !condValue.includes(fieldValue);
    case 'gt':
      return typeof fieldValue === 'number' && typeof condValue === 'number' && fieldValue > condValue;
    case 'lt':
      return typeof fieldValue === 'number' && typeof condValue === 'number' && fieldValue < condValue;
    case 'contains':
      if (typeof fieldValue === 'string' && typeof condValue === 'string') {
        return fieldValue.includes(condValue);
      }
      if (Array.isArray(fieldValue)) {
        return fieldValue.includes(condValue);
      }
      return false;
    default:
      return false;
  }
}

export class PolicyService {
  async createPolicy(tenantId: string, policyData: CreatePolicyRequest): Promise<Policy> {
    const now = new Date().toISOString();
    const policy: Policy = {
      id: uuidv4(),
      tenant_id: tenantId,
      name: policyData.name,
      description: policyData.description,
      effect: policyData.effect,
      subjects: policyData.subjects,
      capability_ids: policyData.capability_ids,
      actions: policyData.actions,
      conditions: policyData.conditions ?? [],
      priority: policyData.priority ?? 0,
      is_active: true,
      created_at: now,
      updated_at: now,
    };

    const { data, error } = await supabase
      .from('policies')
      .insert(policy)
      .select()
      .single();

    if (error || !data) {
      logger.error({ err: error, tenantId }, 'Failed to create policy');
      throw new AppError('INTERNAL_ERROR', 'Failed to create policy', error?.message);
    }

    logger.info({ policyId: policy.id, tenantId }, 'Policy created');
    return data as Policy;
  }

  async getPolicies(tenantId: string, filters: PolicyFilters = {}): Promise<Policy[]> {
    let query = supabase
      .from('policies')
      .select('*')
      .eq('tenant_id', tenantId)
      .order('priority', { ascending: false });

    if (filters.effect !== undefined) {
      query = query.eq('effect', filters.effect);
    }

    if (filters.is_active !== undefined) {
      query = query.eq('is_active', filters.is_active);
    }

    if (filters.capability_id !== undefined) {
      query = query.contains('capability_ids', [filters.capability_id]);
    }

    const { data, error } = await query;

    if (error) {
      logger.error({ err: error, tenantId }, 'Failed to fetch policies');
      throw new AppError('INTERNAL_ERROR', 'Failed to fetch policies', error.message);
    }

    return (data ?? []) as Policy[];
  }

  async deletePolicy(tenantId: string, policyId: string): Promise<void> {
    const { data: existing, error: fetchError } = await supabase
      .from('policies')
      .select('id')
      .eq('id', policyId)
      .eq('tenant_id', tenantId)
      .single();

    if (fetchError || !existing) {
      throw new AppError('NOT_FOUND', `Policy ${policyId} not found`);
    }

    const { error } = await supabase
      .from('policies')
      .delete()
      .eq('id', policyId)
      .eq('tenant_id', tenantId);

    if (error) {
      logger.error({ err: error, policyId, tenantId }, 'Failed to delete policy');
      throw new AppError('INTERNAL_ERROR', 'Failed to delete policy', error.message);
    }

    logger.info({ policyId, tenantId }, 'Policy deleted');
  }

  async evaluatePolicy(
    tenantId: string,
    request: EvaluatePolicyRequest
  ): Promise<PolicyDecision> {
    const { user_id, capability_id, action } = request;

    const { data: policies, error } = await supabase
      .from('policies')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('is_active', true)
      .order('priority', { ascending: false });

    if (error) {
      logger.error({ err: error, tenantId }, 'Failed to fetch policies for evaluation');
      throw new AppError('INTERNAL_ERROR', 'Policy evaluation failed', error.message);
    }

    const evaluatedAt = new Date().toISOString();
    const context: Record<string, unknown> = { user_id, capability_id, action, tenant_id: tenantId };

    let matchedPolicy: Policy | null = null;
    let decision: 'allow' | 'deny' = 'deny';
    let reason = 'No matching policy found; default deny';

    for (const rawPolicy of (policies ?? []) as Policy[]) {
      const subjectMatch =
        rawPolicy.subjects.includes(user_id) || rawPolicy.subjects.includes('*');
      const capabilityMatch =
        rawPolicy.capability_ids.includes(capability_id) || rawPolicy.capability_ids.includes('*');
      const actionMatch =
        rawPolicy.actions.includes(action) || rawPolicy.actions.includes('*');

      if (!subjectMatch || !capabilityMatch || !actionMatch) {
        continue;
      }

      // Evaluate all conditions
      const conditionsPass = (rawPolicy.conditions ?? []).every((cond: PolicyCondition) =>
        evaluateCondition(cond, context)
      );

      if (!conditionsPass) {
        continue;
      }

      matchedPolicy = rawPolicy;
      decision = rawPolicy.effect;
      reason = `Matched policy: ${rawPolicy.name} (priority ${rawPolicy.priority})`;
      break;
    }

    // Record evaluation in audit table
    const evaluation: PolicyEvaluation = {
      id: uuidv4(),
      tenant_id: tenantId,
      user_id,
      capability_id,
      action,
      decision,
      matched_policy_id: matchedPolicy?.id ?? null,
      evaluated_at: evaluatedAt,
    };

    supabase
      .from('policy_evaluations')
      .insert(evaluation)
      .then(({ error: auditError }) => {
        if (auditError) {
          logger.warn({ err: auditError }, 'Failed to record policy evaluation audit');
        }
      });

    logger.info({ tenantId, user_id, capability_id, action, decision }, 'Policy evaluated');

    return {
      decision,
      reason,
      matched_policy: matchedPolicy,
      evaluated_at: evaluatedAt,
    };
  }
}

export const policyService = new PolicyService();
