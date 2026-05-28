process.env['SUPABASE_URL'] = 'https://test.supabase.co';
process.env['SUPABASE_SERVICE_ROLE_KEY'] = 'test-service-key';
process.env['SUPABASE_ANON_KEY'] = 'test-anon-key';
process.env['NODE_ENV'] = 'test';
process.env['VOX_API_URL'] = 'http://localhost:5000/api';

jest.mock('../../src/config/database', () => ({
  supabase: { from: jest.fn() },
  supabaseAnon: { from: jest.fn() },
}));

jest.mock('axios');

import { CapabilityService } from '../../src/services/capability.service';
import { PolicyService } from '../../src/services/policy.service';
import { VoxIntegrationService } from '../../src/services/vox-integration.service';
import { supabase } from '../../src/config/database';
import axios from 'axios';

const mockSupabase = supabase as jest.Mocked<typeof supabase>;
const mockAxios = axios as jest.Mocked<typeof axios>;

function makeFastBuilder(data: unknown) {
  const builder: Record<string, jest.Mock> = {};
  const methods = ['select', 'eq', 'in', 'order', 'limit', 'single', 'insert',
    'update', 'delete', 'contains', 'ilike', 'gte', 'lte'];
  methods.forEach((m) => { builder[m] = jest.fn().mockReturnValue(builder); });
  // Instant resolution with no delay
  builder['then'] = jest.fn().mockImplementation((cb: Function) =>
    Promise.resolve(cb({ data, error: null }))
  );
  return builder;
}

const TENANT_ID = 'perf-tenant';
const USER_ID = 'perf-user';
const CAPABILITY_ID = 'perf-cap';

const mockCapability = {
  id: CAPABILITY_ID,
  tenant_id: TENANT_ID,
  name: 'Perf Capability',
  description: 'Performance test capability',
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

const mockPolicy = {
  id: 'perf-pol',
  tenant_id: TENANT_ID,
  name: 'Perf Policy',
  description: 'Performance test policy',
  effect: 'allow',
  subjects: [USER_ID],
  capability_ids: [CAPABILITY_ID],
  actions: ['execute'],
  conditions: [],
  priority: 10,
  is_active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

const mockDoc = {
  id: 'perf-doc',
  tenant_id: TENANT_ID,
  entity_type: 'capability',
  entity_id: CAPABILITY_ID,
  title: 'Perf Doc',
  content: 'Performance test document content',
  metadata: {},
  indexed_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
};

describe('Performance Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Capability Discovery', () => {
    it('getCapabilities completes within 200ms', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([mockCapability]));

      const service = new CapabilityService();
      const start = Date.now();
      await service.getCapabilities(TENANT_ID);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(200);
    });

    it('getCapability (single) completes within 200ms', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder(mockCapability));

      const service = new CapabilityService();
      const start = Date.now();
      await service.getCapability(TENANT_ID, CAPABILITY_ID);
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(200);
    });

    it('capability execution (function type) completes within 200ms', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder(mockCapability));

      const service = new CapabilityService();
      const start = Date.now();
      await service.executeCapability(TENANT_ID, USER_ID, CAPABILITY_ID, { key: 'value' });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(200);
    });
  });

  describe('Policy Evaluation', () => {
    it('evaluatePolicy completes within 10ms with mocked DB', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([mockPolicy]));

      const service = new PolicyService();
      const start = Date.now();
      await service.evaluatePolicy(TENANT_ID, {
        user_id: USER_ID,
        capability_id: CAPABILITY_ID,
        action: 'execute',
      });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(10);
    });

    it('evaluates 100 policies within 100ms', async () => {
      const manyPolicies = Array.from({ length: 100 }, (_, i) => ({
        ...mockPolicy,
        id: `pol-${i}`,
        priority: 100 - i,
        subjects: [`user-${i}`], // won't match USER_ID except last
      }));

      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder(manyPolicies));

      const service = new PolicyService();
      const start = Date.now();
      await service.evaluatePolicy(TENANT_ID, {
        user_id: USER_ID,
        capability_id: CAPABILITY_ID,
        action: 'execute',
      });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(100);
    });
  });

  describe('Semantic Search', () => {
    it('semanticSearch completes within 500ms with mocked API', async () => {
      (mockAxios.post as jest.Mock).mockResolvedValue({
        data: { results: [{ document: mockDoc, score: 0.95 }] },
      });
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([]));

      const service = new VoxIntegrationService();
      const start = Date.now();
      await service.semanticSearch(TENANT_ID, { query: 'performance test', limit: 10 });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(500);
    });

    it('falls back to local DB search within 500ms when Vox API is unavailable', async () => {
      (mockAxios.post as jest.Mock).mockRejectedValue(new Error('connection refused'));
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([mockDoc]));

      const service = new VoxIntegrationService();
      const start = Date.now();
      const results = await service.semanticSearch(TENANT_ID, { query: 'performance test', limit: 10 });
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(500);
      expect(results.results).toBeDefined();
    });
  });

  describe('Throughput benchmarks', () => {
    it('handles 50 concurrent capability discovery calls', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([mockCapability]));

      const service = new CapabilityService();
      const start = Date.now();
      await Promise.all(
        Array.from({ length: 50 }, () => service.getCapabilities(TENANT_ID))
      );
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(500);
    });

    it('handles 50 concurrent policy evaluations', async () => {
      (mockSupabase.from as jest.Mock).mockReturnValue(makeFastBuilder([mockPolicy]));

      const service = new PolicyService();
      const start = Date.now();
      await Promise.all(
        Array.from({ length: 50 }, () =>
          service.evaluatePolicy(TENANT_ID, { user_id: USER_ID, capability_id: CAPABILITY_ID, action: 'execute' })
        )
      );
      const elapsed = Date.now() - start;

      expect(elapsed).toBeLessThan(500);
    });
  });
});
