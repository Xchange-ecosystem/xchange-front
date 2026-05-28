import request from 'supertest';
import jwt from 'jsonwebtoken';

// Mock environment variables before any imports
process.env['NODE_ENV'] = 'test';
process.env['JWT_SECRET'] = 'test-secret-key-at-least-32-chars-long';
process.env['SUPABASE_URL'] = 'https://test.supabase.co';
process.env['SUPABASE_SERVICE_ROLE_KEY'] = 'test-service-role-key';
process.env['SUPABASE_ANON_KEY'] = 'test-anon-key';
process.env['VOX_API_URL'] = 'http://localhost:5000/api';

jest.mock('../../src/config/database', () => ({
  supabase: {
    from: jest.fn(),
  },
  supabaseAnon: {
    from: jest.fn(),
  },
}));

jest.mock('axios');

import app from '../../src/app';
import { supabase } from '../../src/config/database';
import axios from 'axios';

const mockSupabase = supabase as jest.Mocked<typeof supabase>;
const mockAxios = axios as jest.Mocked<typeof axios>;

const JWT_SECRET = 'test-secret-key-at-least-32-chars-long';
const TENANT_ID = 'tenant-uuid-1234';
const USER_ID = 'user-uuid-5678';

function makeToken(overrides: Record<string, unknown> = {}): string {
  return jwt.sign(
    { userId: USER_ID, tenantId: TENANT_ID, email: 'test@example.com', roles: ['user'], ...overrides },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
}

function createMockQueryBuilder(returnData: unknown = [], error: unknown = null) {
  const builder: Record<string, jest.Mock> = {};
  const chainMethods = ['select', 'eq', 'in', 'order', 'limit', 'single', 'insert', 'update', 'delete',
    'contains', 'ilike', 'gte', 'lte', 'neq'];

  chainMethods.forEach((method) => {
    builder[method] = jest.fn().mockReturnValue(builder);
  });

  builder['then'] = jest.fn().mockImplementation((resolve: Function) =>
    Promise.resolve(resolve({ data: returnData, error }))
  );

  // Make it thenable (for await)
  Object.defineProperty(builder, Symbol.iterator, { value: undefined });

  return builder;
}

describe('Phase 2 Integration Tests', () => {
  let token: string;

  beforeEach(() => {
    token = makeToken();
    jest.clearAllMocks();
  });

  // ─────────────────────────────────────────────────────────────────────
  // Health
  // ─────────────────────────────────────────────────────────────────────

  describe('GET /health', () => {
    it('returns 200 with status ok', async () => {
      const res = await request(app).get('/health');
      expect(res.status).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.timestamp).toBeDefined();
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // Capabilities
  // ─────────────────────────────────────────────────────────────────────

  describe('Capabilities', () => {
    const capability = {
      id: 'cap-1',
      tenant_id: TENANT_ID,
      name: 'Test Capability',
      description: 'A test capability',
      category: 'test',
      version: '1.0.0',
      input_schema: {},
      output_schema: {},
      handler_type: 'function',
      handler_config: {},
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    it('GET /api/v1/capabilities - returns list of capabilities', async () => {
      const builder = createMockQueryBuilder([capability]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/capabilities')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('GET /api/v1/capabilities - returns 401 without auth', async () => {
      const res = await request(app).get('/api/v1/capabilities');
      expect(res.status).toBe(401);
    });

    it('GET /api/v1/capabilities/:id - returns a capability', async () => {
      const builder = createMockQueryBuilder(capability);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/capabilities/cap-1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/v1/capabilities/:id/execute - executes a capability', async () => {
      const builder = createMockQueryBuilder(capability);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/capabilities/cap-1/execute')
        .set('Authorization', `Bearer ${token}`)
        .send({ input: { key: 'value' } });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('execution_id');
      expect(res.body.data).toHaveProperty('status');
    });

    it('POST /api/v1/capabilities/:id/execute - returns 400 without input', async () => {
      const res = await request(app)
        .post('/api/v1/capabilities/cap-1/execute')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // Apps
  // ─────────────────────────────────────────────────────────────────────

  describe('Apps', () => {
    const app_def = {
      id: 'app-1',
      name: 'Test App',
      description: 'A test app',
      version: '1.0.0',
      vendor: 'Test Vendor',
      category: 'test',
      capabilities: [],
      config_schema: {},
      webhook_events: [],
      is_published: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const installation = {
      id: 'inst-1',
      tenant_id: TENANT_ID,
      app_id: 'app-1',
      installed_by: USER_ID,
      config: {},
      status: 'active',
      installed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    it('GET /api/v1/apps - returns list of apps', async () => {
      const builder = createMockQueryBuilder([{ ...installation, app: app_def }]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/apps')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/v1/apps/:id/install - installs an app', async () => {
      const builder = createMockQueryBuilder(installation);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      // For installApp: first call returns app, second returns no existing, third returns insert result
      let callCount = 0;
      (mockSupabase.from as jest.Mock).mockImplementation(() => {
        callCount++;
        return createMockQueryBuilder(callCount === 1 ? app_def : callCount === 2 ? null : installation);
      });

      const res = await request(app)
        .post('/api/v1/apps/app-1/install')
        .set('Authorization', `Bearer ${token}`)
        .send({ config: {} });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it('DELETE /api/v1/apps/:id - uninstalls an app', async () => {
      const builder = createMockQueryBuilder({ id: 'inst-1' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .delete('/api/v1/apps/app-1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // Policies
  // ─────────────────────────────────────────────────────────────────────

  describe('Policies', () => {
    const policy = {
      id: 'pol-1',
      tenant_id: TENANT_ID,
      name: 'Test Policy',
      description: 'A test policy',
      effect: 'allow',
      subjects: [USER_ID],
      capability_ids: ['cap-1'],
      actions: ['execute'],
      conditions: [],
      priority: 10,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    it('GET /api/v1/policies - returns list of policies', async () => {
      const builder = createMockQueryBuilder([policy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/policies')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/v1/policies - creates a policy', async () => {
      const builder = createMockQueryBuilder(policy);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/policies')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'Test Policy',
          description: 'A test policy',
          effect: 'allow',
          subjects: [USER_ID],
          capability_ids: ['cap-1'],
          actions: ['execute'],
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/v1/policies - returns 400 for missing fields', async () => {
      const res = await request(app)
        .post('/api/v1/policies')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'incomplete' });

      expect(res.status).toBe(400);
    });

    it('DELETE /api/v1/policies/:id - deletes a policy', async () => {
      const builder = createMockQueryBuilder({ id: 'pol-1' });
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .delete('/api/v1/policies/pol-1')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
    });

    it('POST /api/v1/policies/evaluate - evaluates a policy', async () => {
      const builder = createMockQueryBuilder([policy]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/policies/evaluate')
        .set('Authorization', `Bearer ${token}`)
        .send({ user_id: USER_ID, capability_id: 'cap-1', action: 'execute' });

      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('decision');
      expect(['allow', 'deny']).toContain(res.body.data.decision);
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // Semantic
  // ─────────────────────────────────────────────────────────────────────

  describe('Semantic', () => {
    const document = {
      id: 'doc-1',
      tenant_id: TENANT_ID,
      entity_type: 'capability',
      entity_id: 'cap-1',
      title: 'Test Doc',
      content: 'Test content for semantic search',
      metadata: {},
      indexed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    it('POST /api/v1/semantic - performs semantic search', async () => {
      (mockAxios.post as jest.Mock).mockResolvedValue({
        data: { results: [{ document, score: 0.9 }] },
      });

      const builder = createMockQueryBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/semantic')
        .set('Authorization', `Bearer ${token}`)
        .send({ query: 'test query', limit: 10 });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('results');
      expect(res.body.data).toHaveProperty('query');
    });

    it('POST /api/v1/semantic - returns 400 without query', async () => {
      const res = await request(app)
        .post('/api/v1/semantic')
        .set('Authorization', `Bearer ${token}`)
        .send({});

      expect(res.status).toBe(400);
    });

    it('POST /api/v1/semantic/index - indexes an entity', async () => {
      (mockAxios.post as jest.Mock).mockResolvedValue({ data: { embedding: [0.1, 0.2] } });

      const builder = createMockQueryBuilder(document);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/semantic/index')
        .set('Authorization', `Bearer ${token}`)
        .send({
          entity_type: 'capability',
          entity_id: 'cap-1',
          title: 'Test Doc',
          content: 'Test content',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });

    it('GET /api/v1/semantic/documents/:id/related - gets related entities', async () => {
      (mockAxios.get as jest.Mock).mockResolvedValue({
        data: { related: [] },
      });

      const builder = createMockQueryBuilder([]);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/semantic/documents/cap-1/related')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // Schemas
  // ─────────────────────────────────────────────────────────────────────

  describe('Schemas', () => {
    const schema = {
      id: 'schema-1',
      tenant_id: TENANT_ID,
      entity_type: 'user',
      schema: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] },
      version: '1.0.0',
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    it('GET /api/v1/schemas/:type - returns schema', async () => {
      const builder = createMockQueryBuilder(schema);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .get('/api/v1/schemas/user')
        .set('Authorization', `Bearer ${token}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });

    it('POST /api/v1/schemas/:type/validate - validates data', async () => {
      const builder = createMockQueryBuilder(schema);
      (mockSupabase.from as jest.Mock).mockReturnValue(builder);

      const res = await request(app)
        .post('/api/v1/schemas/user/validate')
        .set('Authorization', `Bearer ${token}`)
        .send({ data: { name: 'Alice' } });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('valid');
    });
  });

  // ─────────────────────────────────────────────────────────────────────
  // 404 handler
  // ─────────────────────────────────────────────────────────────────────

  describe('404 handler', () => {
    it('returns 404 for unknown routes', async () => {
      const res = await request(app).get('/api/v1/nonexistent');
      expect(res.status).toBe(404);
    });
  });
});
