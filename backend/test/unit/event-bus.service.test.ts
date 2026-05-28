process.env['SUPABASE_URL'] = 'https://test.supabase.co';
process.env['SUPABASE_SERVICE_ROLE_KEY'] = 'test-service-key';
process.env['SUPABASE_ANON_KEY'] = 'test-anon-key';
process.env['NODE_ENV'] = 'test';

jest.mock('../../src/config/database', () => ({
  supabase: { from: jest.fn() },
  supabaseAnon: { from: jest.fn() },
}));

jest.mock('axios');

// Speed up retry delays in tests
jest.useFakeTimers({ legacyFakeTimers: false });

import { EventBusService } from '../../src/services/event-bus.service';
import { supabase } from '../../src/config/database';
import { AppError } from '../../src/utils/error-handler';
import axios from 'axios';

const mockSupabase = supabase as jest.Mocked<typeof supabase>;
const mockAxios = axios as jest.Mocked<typeof axios>;

function makeMockBuilder(resolvedData: unknown, resolvedError: unknown = null) {
  const builder: Record<string, jest.Mock> = {};
  const methods = ['select', 'eq', 'in', 'order', 'limit', 'single', 'insert',
    'update', 'delete', 'gte', 'lte'];
  methods.forEach((m) => { builder[m] = jest.fn().mockReturnValue(builder); });
  builder['then'] = jest.fn().mockImplementation((cb: Function) =>
    Promise.resolve(cb({ data: resolvedData, error: resolvedError }))
  );
  return builder;
}

describe('EventBusService', () => {
  let service: EventBusService;

  beforeEach(() => {
    service = new EventBusService();
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const tenantId = 'tenant-abc';
  const actorId = 'user-xyz';

  const subscriber = {
    id: 'sub-1',
    tenant_id: tenantId,
    event_type: 'user.created',
    app_id: 'app-1',
    webhook_url: 'http://hook.example.com/receive',
    is_active: true,
    retry_count: 0,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  describe('publishEvent', () => {
    it('inserts event into the database and returns it', async () => {
      const insertBuilder = makeMockBuilder(null);
      const subBuilder = makeMockBuilder([]);
      let callCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        callCount++;
        return callCount === 1 ? insertBuilder : subBuilder;
      });

      const event = await service.publishEvent(
        tenantId, 'user.created', 'user', 'user-1', { name: 'Alice' }, actorId
      );

      expect(event.event_type).toBe('user.created');
      expect(event.tenant_id).toBe(tenantId);
      expect(event.id).toBeDefined();
    });

    it('throws INTERNAL_ERROR when db insert fails', async () => {
      const builder = makeMockBuilder(null, { message: 'db error' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(
        service.publishEvent(tenantId, 'user.created', 'user', 'user-1', {}, actorId)
      ).rejects.toMatchObject({ code: 'INTERNAL_ERROR' });
    });

    it('delivers to subscribers via webhook', async () => {
      const insertBuilder = makeMockBuilder(null);
      const subBuilder = makeMockBuilder([subscriber]);
      let callCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        callCount++;
        return callCount === 1 ? insertBuilder : subBuilder;
      });

      (mockAxios.post as jest.Mock).mockResolvedValue({ status: 200, data: {} });

      await service.publishEvent(
        tenantId, 'user.created', 'user', 'user-1', { name: 'Alice' }, actorId
      );

      // Wait for async fanout
      await Promise.resolve();
      await Promise.resolve();
      await Promise.resolve();

      expect(mockAxios.post).toHaveBeenCalledWith(
        subscriber.webhook_url,
        expect.any(Object),
        expect.any(Object)
      );
    });
  });

  describe('subscribeToEvent', () => {
    it('creates a subscription and returns it', async () => {
      const builder = makeMockBuilder(subscriber);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.subscribeToEvent(
        tenantId, 'user.created', 'app-1', 'http://hook.example.com/receive'
      );

      expect(result.event_type).toBe('user.created');
      expect(result.is_active).toBe(true);
    });

    it('throws INTERNAL_ERROR on db failure', async () => {
      const builder = makeMockBuilder(null, { message: 'db error' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(
        service.subscribeToEvent(tenantId, 'user.created', 'app-1', 'http://hook.example.com')
      ).rejects.toMatchObject({ code: 'INTERNAL_ERROR' });
    });
  });

  describe('unsubscribeFromEvent', () => {
    it('deactivates a subscription', async () => {
      const existingBuilder = makeMockBuilder({ id: 'sub-1' });
      const updateBuilder = makeMockBuilder(null);
      let callCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        callCount++;
        return callCount === 1 ? existingBuilder : updateBuilder;
      });

      await expect(service.unsubscribeFromEvent('sub-1')).resolves.toBeUndefined();
    });

    it('throws NOT_FOUND for non-existent subscriber', async () => {
      const builder = makeMockBuilder(null, { message: 'not found' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await expect(service.unsubscribeFromEvent('nonexistent')).rejects.toMatchObject({
        code: 'NOT_FOUND',
      });
    });
  });

  describe('getEventHistory', () => {
    it('returns events for tenant', async () => {
      const events = [
        { id: 'evt-1', tenant_id: tenantId, event_type: 'user.created', aggregate_type: 'user',
          aggregate_id: 'u-1', data: {}, actor_id: actorId, created_at: new Date().toISOString() },
      ];
      const builder = makeMockBuilder(events);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const result = await service.getEventHistory(tenantId, {});
      expect(Array.isArray(result)).toBe(true);
    });

    it('applies event_type filter', async () => {
      const builder = makeMockBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      await service.getEventHistory(tenantId, { event_type: 'user.created' });
      expect(builder['eq']).toHaveBeenCalledWith('event_type', 'user.created');
    });

    it('applies date range filters', async () => {
      const builder = makeMockBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const from = '2024-01-01T00:00:00Z';
      const to = '2024-12-31T23:59:59Z';
      await service.getEventHistory(tenantId, { from, to });
      expect(builder['gte']).toHaveBeenCalledWith('created_at', from);
      expect(builder['lte']).toHaveBeenCalledWith('created_at', to);
    });
  });

  describe('webhook delivery retry logic', () => {
    it('retries delivery on failure before succeeding', async () => {
      // Setup: insert succeeds, subscriber fetch returns one subscriber
      const insertBuilder = makeMockBuilder(null);
      const subBuilder = makeMockBuilder([subscriber]);
      const updateBuilder = makeMockBuilder(null);

      let fromCallCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        fromCallCount++;
        if (fromCallCount === 1) return insertBuilder;
        if (fromCallCount === 2) return subBuilder;
        return updateBuilder;
      });

      // Fail twice then succeed
      (mockAxios.post as jest.Mock)
        .mockRejectedValueOnce(new Error('timeout'))
        .mockRejectedValueOnce(new Error('timeout'))
        .mockResolvedValueOnce({ status: 200, data: {} });

      const publishPromise = service.publishEvent(
        tenantId, 'user.created', 'user', 'user-1', {}, actorId
      );

      // Advance timers for retry delays
      jest.runAllTimersAsync();

      await publishPromise;
      await new Promise((r) => setImmediate(r));
      jest.runAllTimersAsync();
      await new Promise((r) => setImmediate(r));
      jest.runAllTimersAsync();
      await new Promise((r) => setImmediate(r));
    });
  });
});
