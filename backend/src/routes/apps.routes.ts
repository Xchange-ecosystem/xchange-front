import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { validateTenant } from '../middleware/tenant.middleware';
import { listApps, installApp, uninstallApp } from '../controllers/apps.controller';

const router = Router();

router.use(authenticateToken);
router.use(validateTenant);

router.get('/', listApps);
router.post('/:id/install', installApp);
router.delete('/:id', uninstallApp);

export default router;
