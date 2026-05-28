process.env['SUPABASE_URL'] = 'https://test.supabase.co';
process.env['SUPABASE_SERVICE_ROLE_KEY'] = 'test-service-key';
process.env['SUPABASE_ANON_KEY'] = 'test-anon-key';
process.env['NODE_ENV'] = 'test';

jest.mock('../../src/config/database', () => ({
  supabase: { from: jest.fn() },
  supabaseAnon: { from: jest.fn() },
}));

import { PolicyService } from '../../src/services/policy.service';
import { supabase } from '../../src/config/database';
import { AppError } from '../../src/utils/error-handler';
import { Policy } from '../../src/types';

const mockSupabase = supabase as jest.Mocked<typeof supabase>;

function makeMockBuilder(resolvedData: unknown, resolvedError: unknown = null) {
  const builder: Record<string, jest.Mock> = {};
  const methods = ['select', 'eq', 'in', 'order', 'limit', 'single', 'insert',
    'update', 'delete', 'contains', 'gte', 'lte'];
  methods.forEach((m) => { builder[m] = jest.fn().mockReturnValue(builder); });
  builder['then'] = jest.fn().mockImplementation((cb: Function) =>
    Promise.resolve(cb({ data: resolvedData, error: resolvedError }))
  );
  return builder;
}

describe('PolicyService', () => {
  let service: PolicyService;

  beforeEach(() => {
    service = new PolicyService();
    jest.clearAllMocks();
  });

  const tenantId = 'tenant-abc';
  const userId = 'user-xyz';
  const capabilityId = 'cap-123';

  const basePolicy: Policy = {
    id: 'pol-1',
    tenant_id: tenantId,
    name: 'Allow Execute',
    description: 'Allow user to execute',
    effect: 'allow',
    subjects: [userId],
    capability_ids: [capabilityId],
    actions: ['execute'],
    conditions: [],
    priority: 10,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  describe('createPolicy', () => {
    it('creates a policy and returns it', async () => {
      const builder = makeMockBuilder(basePolicy);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.createPolicy(tenantId, {
        name: 'Allow Execute',
        description: 'Allow user to execute',
        effect: 'allow',
        subjects: [userId],
        capability_ids: [capabilityId],
        actions: ['execute'],
      });

      expect(result).toHaveProperty('id');
      expect(result.effect).toBe('allow');
    });

    it('throws INTERNAL_ERROR on db failure', async () => {
      const builder = makeMockBuilder(null, { message: 'db error' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(
        service.createPolicy(tenantId, {
          name: 'Policy',
          description: 'desc',
          effect: 'allow',
          subjects: [],
          capability_ids: [],
          actions: [],
        })
      ).rejects.toMatchObject({ code: 'INTERNAL_ERROR' });
    });
  });

  describe('getPolicies', () => {
    it('returns policies for tenant', async () => {
      const builder = makeMockBuilder([basePolicy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.getPolicies(tenantId);
      expect(Array.isArray(result)).toBe(true);
    });

    it('applies effect filter', async () => {
      const builder = makeMockBuilder([basePolicy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await service.getPolicies(tenantId, { effect: 'allow' });
      expect(builder['eq']).toHaveBeenCalledWith('effect', 'allow');
    });
  });

  describe('deletePolicy', () => {
    it('deletes an existing policy', async () => {
      const existingBuilder = makeMockBuilder({ id: 'pol-1' });
      const deleteBuilder = makeMockBuilder(null);
      let callCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        callCount++;
        return callCount === 1 ? existingBuilder : deleteBuilder;
      });

      await expect(service.deletePolicy(tenantId, 'pol-1')).resolves.toBeUndefined();
    });

    it('throws NOT_FOUND for non-existent policy', async () => {
      const builder = makeMockBuilder(null, { message: 'not found' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(service.deletePolicy(tenantId, 'nonexistent')).rejects.toMatchObject({
        code: 'NOT_FOUND',
      });
    });
  });

  describe('evaluatePolicy', () => {
    it('allows when matching allow policy found', async () => {
      const builder = makeMockBuilder([basePolicy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('allow');
      expect(decision.matched_policy).not.toBeNull();
    });

    it('denies when matching deny policy found', async () => {
      const denyPolicy = { ...basePolicy, effect: 'deny' };
      const builder = makeMockBuilder([denyPolicy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('deny');
    });

    it('denies by default when no policies match', async () => {
      const builder = makeMockBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('deny');
      expect(decision.matched_policy).toBeNull();
    });

    it('uses wildcard subject (*)', async () => {
      const wildcardPolicy = { ...basePolicy, subjects: ['*'] };
      const builder = makeMockBuilder([wildcardPolicy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: 'any-user', capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('allow');
    });

    it('evaluates eq condition correctly', async () => {
      const policyWithCondition = {
        ...basePolicy,
        conditions: [{ field: 'user_id', operator: 'eq', value: userId }],
      };
      const builder = makeMockBuilder([policyWithCondition]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const allowed = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(allowed.decision).toBe('allow');
    });

    it('denies when condition fails', async () => {
      const policyWithCondition = {
        ...basePolicy,
        conditions: [{ field: 'user_id', operator: 'eq', value: 'different-user' }],
      };
      const builder = makeMockBuilder([policyWithCondition]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const denied = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(denied.decision).toBe('deny');
    });

    it('evaluates in operator', async () => {
      const policyWithIn = {
        ...basePolicy,
        conditions: [{ field: 'user_id', operator: 'in', value: [userId, 'other-user'] }],
      };
      const builder = makeMockBuilder([policyWithIn]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('allow');
    });

    it('respects policy priority (higher priority wins)', async () => {
      const allowHighPriority = { ...basePolicy, priority: 100, effect: 'allow' };
      const denyLowPriority = { ...basePolicy, id: 'pol-2', priority: 1, effect: 'deny' };
      // Supabase returns sorted by priority DESC, so allow comes first
      const builder = makeMockBuilder([allowHighPriority, denyLowPriority]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const decision = await service.evaluatePolicy(tenantId, { user_id: userId, capability_id: capabilityId, action: 'execute' });
      expect(decision.decision).toBe('allow');
    });
  });
});
