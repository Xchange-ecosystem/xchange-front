import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { validateTenant } from '../middleware/tenant.middleware';
import { getSchema, validateData } from '../controllers/schema.controller';

const router = Router();

router.use(authenticateToken);
router.use(validateTenant);

router.get('/:type', getSchema);
router.post('/:type/validate', validateData);

export default router;
