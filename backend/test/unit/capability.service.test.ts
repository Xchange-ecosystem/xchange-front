process.env['SUPABASE_URL'] = 'https://test.supabase.co';
process.env['SUPABASE_SERVICE_ROLE_KEY'] = 'test-service-key';
process.env['SUPABASE_ANON_KEY'] = 'test-anon-key';
process.env['NODE_ENV'] = 'test';

jest.mock('../../src/config/database', () => ({
  supabase: { from: jest.fn() },
  supabaseAnon: { from: jest.fn() },
}));

jest.mock('axios');

import { CapabilityService } from '../../src/services/capability.service';
import { supabase } from '../../src/config/database';
import { AppError } from '../../src/utils/error-handler';
import axios from 'axios';

const mockSupabase = supabase as jest.Mocked<typeof supabase>;
const mockAxios = axios as jest.Mocked<typeof axios>;

function makeMockBuilder(resolvedData: unknown, resolvedError: unknown = null) {
  const builder: Record<string, jest.Mock> = {};
  const methods = ['select', 'eq', 'in', 'neq', 'order', 'limit', 'single', 'insert',
    'update', 'delete', 'contains', 'ilike', 'gte', 'lte'];
  methods.forEach((m) => { builder[m] = jest.fn().mockReturnValue(builder); });
  builder['then'] = jest.fn().mockImplementation((cb: Function) =>
    Promise.resolve(cb({ data: resolvedData, error: resolvedError }))
  );
  return builder;
}

describe('CapabilityService', () => {
  let service: CapabilityService;

  beforeEach(() => {
    service = new CapabilityService();
    jest.clearAllMocks();
  });

  const tenantId = 'tenant-abc';
  const userId = 'user-xyz';
  const capabilityId = 'cap-123';

  const capability = {
    id: capabilityId,
    tenant_id: tenantId,
    name: 'My Capability',
    description: 'Desc',
    category: 'test',
    version: '1.0',
    input_schema: {},
    output_schema: {},
    handler_type: 'function',
    handler_config: {},
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  describe('getCapabilities', () => {
    it('returns capabilities owned by tenant', async () => {
      const builder = makeMockBuilder([capability]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.getCapabilities(tenantId);
      expect(result).toBeInstanceOf(Array);
    });

    it('throws INTERNAL_ERROR when supabase query fails', async () => {
      const builder = makeMockBuilder(null, { message: 'db error' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(service.getCapabilities(tenantId)).rejects.toThrow(AppError);
    });
  });

  describe('getCapability', () => {
    it('returns capability when tenant owns it', async () => {
      const builder = makeMockBuilder(capability);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.getCapability(tenantId, capabilityId);
      expect(result.id).toBe(capabilityId);
    });

    it('throws NOT_FOUND when capability does not exist', async () => {
      const builder = makeMockBuilder(null, { message: 'not found' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(service.getCapability(tenantId, capabilityId)).rejects.toMatchObject({
        code: 'NOT_FOUND',
      });
    });
  });

  describe('executeCapability', () => {
    it('executes function-type capability successfully', async () => {
      const builder = makeMockBuilder(capability);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.executeCapability(tenantId, userId, capabilityId, { foo: 'bar' });
      expect(result.status).toBe('success');
      expect(result.capability_id).toBe(capabilityId);
      expect(result.execution_id).toBeDefined();
      expect(typeof result.duration_ms).toBe('number');
    });

    it('executes webhook-type capability and calls the webhook URL', async () => {
      const webhookCap = { ...capability, handler_type: 'webhook', handler_config: { url: 'http://hook.example.com' } };
      const builder = makeMockBuilder(webhookCap);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);
      (mockAxios.post as jest.Mock).mockResolvedValue({ data: { result: 'ok' } });

      const result = await service.executeCapability(tenantId, userId, capabilityId, {});
      expect(result.status).toBe('success');
      expect(mockAxios.post).toHaveBeenCalledWith(
        'http://hook.example.com',
        expect.any(Object),
        expect.any(Object)
      );
    });

    it('returns error status when webhook fails', async () => {
      const webhookCap = { ...capability, handler_type: 'webhook', handler_config: { url: 'http://hook.example.com' } };
      const builder = makeMockBuilder(webhookCap);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);
      (mockAxios.post as jest.Mock).mockRejectedValue(new Error('connection refused'));

      const result = await service.executeCapability(tenantId, userId, capabilityId, {});
      expect(result.status).toBe('error');
    });

    it('validates input against input_schema', async () => {
      const strictCap = {
        ...capability,
        input_schema: {
          type: 'object',
          properties: { name: { type: 'string' } },
          required: ['name'],
          additionalProperties: false,
        },
      };
      const builder = makeMockBuilder(strictCap);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(
        service.executeCapability(tenantId, userId, capabilityId, { wrongField: 123 })
      ).rejects.toMatchObject({ code: 'INVALID_INPUT' });
    });
  });

  describe('validateCapabilityAccess', () => {
    it('returns true for matching allow policy', async () => {
      const policies = [{
        effect: 'allow',
        subjects: [userId],
        capability_ids: [capabilityId],
        actions: ['execute'],
        conditions: [],
        priority: 10,
        is_active: true,
      }];
      const builder = makeMockBuilder(policies);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.validateCapabilityAccess(tenantId, userId, capabilityId, 'execute');
      expect(result).toBe(true);
    });

    it('returns false when no policies match', async () => {
      const builder = makeMockBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.validateCapabilityAccess(tenantId, userId, capabilityId, 'execute');
      expect(result).toBe(false);
    });

    it('returns false for deny policy', async () => {
      const policies = [{
        effect: 'deny',
        subjects: [userId],
        capability_ids: [capabilityId],
        actions: ['execute'],
        conditions: [],
        priority: 10,
        is_active: true,
      }];
      const builder = makeMockBuilder(policies);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.validateCapabilityAccess(tenantId, userId, capabilityId, 'execute');
      expect(result).toBe(false);
    });
  });
});
