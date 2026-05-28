import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { logger } from './utils/logger';
import { errorHandler } from './utils/error-handler';
import { AppError } from './utils/error-handler';

import capabilitiesRouter from './routes/capabilities.routes';
import appsRouter from './routes/apps.routes';
import policiesRouter from './routes/policies.routes';
import semanticRouter from './routes/semantic.routes';
import schemasRouter from './routes/schemas.routes';

const app = express();

// ── Middleware ──────────────────────────────────────────────────────────────

app.use(
  cors({
    origin: process.env['CORS_ORIGIN'] ?? '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logging
app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.debug({ method: req.method, path: req.path, ip: req.ip }, 'Incoming request');
  next();
});

// ── Health Check ─────────────────────────────────────────────────────────────

app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env['NODE_ENV'] ?? 'development',
    version: process.env['npm_package_version'] ?? '1.0.0',
  });
});

// ── Routes ────────────────────────────────────────────────────────────────────

app.use('/api/v1/capabilities', capabilitiesRouter);
app.use('/api/v1/apps', appsRouter);
app.use('/api/v1/policies', policiesRouter);
app.use('/api/v1/semantic', semanticRouter);
app.use('/api/v1/schemas', schemasRouter);

// ── 404 Handler ───────────────────────────────────────────────────────────────

app.use((req: Request, _res: Response, next: NextFunction) => {
  next(new AppError('NOT_FOUND', `Route ${req.method} ${req.path} not found`));
});

// ── Error Handler ─────────────────────────────────────────────────────────────

app.use(errorHandler);

// ── Server Startup ────────────────────────────────────────────────────────────

const PORT = parseInt(process.env['PORT'] ?? '3000', 10);

if (require.main === module) {
  app.listen(PORT, () => {
    logger.info(
      { port: PORT, env: process.env['NODE_ENV'] ?? 'development' },
      'Xcamp Phase 2 Backend started'
    );
  });
}

export default app;
