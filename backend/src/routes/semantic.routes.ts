import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { validateTenant } from '../middleware/tenant.middleware';
import { search, getRelatedEntities, indexEntity } from '../controllers/semantic.controller';

const router = Router();

router.use(authenticateToken);
router.use(validateTenant);

router.post('/', search);
router.get('/documents/:id/related', getRelatedEntities);
router.post('/index', indexEntity);

export default router;
