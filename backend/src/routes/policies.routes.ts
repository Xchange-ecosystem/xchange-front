import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { validateTenant } from '../middleware/tenant.middleware';
import { listPolicies, createPolicy, deletePolicy, evaluatePolicy } from '../controllers/policy.controller';

const router = Router();

router.use(authenticateToken);
router.use(validateTenant);

router.get('/', listPolicies);
router.post('/', createPolicy);
router.delete('/:id', deletePolicy);
router.post('/evaluate', evaluatePolicy);

export default router;
