import { Router } from 'express';

import * as authController from '../../controllers/authController';
import * as authValidator from '../../validators/authValidator';

const router = Router();

// GET /api/v1/auth
router.post('/', authController.getInfo);
// POST /api/v1/auth/token
router.post('/', authValidator.loginValidator, authController.login);

export default router;
