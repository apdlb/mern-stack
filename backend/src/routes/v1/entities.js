import { Router } from 'express';

import * as entityController from '../../controllers/entityController';

const router = Router();

// GET /api/v1/entities
router.get('/', entityController.findEntities);

export default router;
