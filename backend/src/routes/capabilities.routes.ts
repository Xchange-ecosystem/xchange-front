import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { validateTenant } from '../middleware/tenant.middleware';
import { listCapabilities, getCapability, executeCapability } from '../controllers/capabilities.controller';

const router = Router();

router.use(authenticateToken);
router.use(validateTenant);

router.get('/', listCapabilities);
router.get('/:id', getCapability);
router.post('/:id/execute', executeCapability);

export default router;
