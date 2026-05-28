import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../config/database';
import { AppError } from '../utils/error-handler';
import { validateSchema } from '../utils/validators';
import { logger } from '../utils/logger';
import {
  Capability,
  ExecuteCapabilityResponse,
} from '../types';

export class CapabilityService {
  async getCapabilities(tenantId: string): Promise<Capability[]> {
    const { data, error } = await supabase
      .from('capabilities')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('is_active', true)
      .order('name');

    if (error) {
      logger.error({ error, tenantId }, 'Failed to fetch capabilities');
      throw new AppError('INTERNAL_ERROR', 'Failed to fetch capabilities', error.message);
    }

    // Also fetch capabilities shared via capability_visibility
    const { data: visibleData, error: visibilityError } = await supabase
      .from('capability_visibility')
      .select('capability_id')
      .eq('visible_to_tenant_id', tenantId);

    if (visibilityError) {
      logger.warn({ visibilityError }, 'Failed to fetch capability visibility');
    }

    if (visibleData && visibleData.length > 0) {
      const sharedIds = visibleData.map((v: { capability_id: string }) => v.capability_id);
      const { data: sharedCaps, error: sharedError } = await supabase
        .from('capabilities')
        .select('*')
        .in('id', sharedIds)
        .eq('is_active', true);

      if (!sharedError && sharedCaps) {
        const existingIds = new Set((data ?? []).map((c: Capability) => c.id));
        const newShared = sharedCaps.filter((c: Capability) => !existingIds.has(c.id));
        return [...(data ?? []), ...newShared] as Capability[];
      }
    }

    return (data ?? []) as Capability[];
  }

  async getCapability(tenantId: string, capabilityId: string): Promise<Capability> {
    const { data, error } = await supabase
      .from('capabilities')
      .select('*')
      .eq('id', capabilityId)
      .eq('tenant_id', tenantId)
      .single();

    if (error || !data) {
      // Check visibility table for cross-tenant shared capabilities
      const { data: visibility } = await supabase
        .from('capability_visibility')
        .select('capability_id')
        .eq('capability_id', capabilityId)
        .eq('visible_to_tenant_id', tenantId)
        .single();

      if (visibility) {
        const { data: sharedCap, error: sharedErr } = await supabase
          .from('capabilities')
          .select('*')
          .eq('id', capabilityId)
          .eq('is_active', true)
          .single();

        if (!sharedErr && sharedCap) {
          return sharedCap as Capability;
        }
      }

      throw new AppError('NOT_FOUND', `Capability ${capabilityId} not found`);
    }

    return data as Capability;
  }

  async executeCapability(
    tenantId: string,
    userId: string,
    capabilityId: string,
    input: Record<string, unknown>
  ): Promise<ExecuteCapabilityResponse> {
    const capability = await this.getCapability(tenantId, capabilityId);

    if (Object.keys(capability.input_schema).length > 0) {
      const validation = validateSchema(capability.input_schema, input);
      if (!validation.valid) {
        throw new AppError('INVALID_INPUT', 'Input validation failed', { errors: validation.errors });
      }
    }

    const executionId = uuidv4();
    const startedAt = Date.now();

    try {
      let output: unknown;

      if (capability.handler_type === 'webhook') {
        const webhookUrl = capability.handler_config['url'] as string;
        if (!webhookUrl) {
          throw new AppError('INTERNAL_ERROR', 'Webhook URL not configured for capability');
        }
        const response = await axios.post(webhookUrl, { input, tenantId, userId, executionId }, {
          timeout: 30_000,
          headers: { 'Content-Type': 'application/json' },
        });
        output = response.data;
      } else if (capability.handler_type === 'function') {
        // Simulated function execution
        output = { result: 'executed', capability: capability.name, input };
      } else {
        output = { result: 'workflow_started', executionId };
      }

      const duration_ms = Date.now() - startedAt;

      logger.info({ capabilityId, executionId, tenantId, userId, duration_ms }, 'Capability executed');

      return {
        capability_id: capabilityId,
        execution_id: executionId,
        status: 'success',
        output,
        duration_ms,
        executed_at: new Date().toISOString(),
      };
    } catch (err) {
      if (err instanceof AppError) throw err;
      const duration_ms = Date.now() - startedAt;
      logger.error({ err, capabilityId, executionId }, 'Capability execution failed');
      return {
        capability_id: capabilityId,
        execution_id: executionId,
        status: 'error',
        output: null,
        duration_ms,
        executed_at: new Date().toISOString(),
      };
    }
  }

  async validateCapabilityAccess(
    tenantId: string,
    userId: string,
    capabilityId: string,
    action: string
  ): Promise<boolean> {
    const { data: policies } = await supabase
      .from('policies')
      .select('*')
      .eq('tenant_id', tenantId)
      .eq('is_active', true)
      .contains('capability_ids', [capabilityId])
      .contains('actions', [action])
      .order('priority', { ascending: false });

    if (!policies || policies.length === 0) {
      return false;
    }

    for (const policy of policies) {
      if (policy.subjects.includes(userId) || policy.subjects.includes('*')) {
        return policy.effect === 'allow';
      }
    }

    return false;
  }
}

export const capabilityService = new CapabilityService();
