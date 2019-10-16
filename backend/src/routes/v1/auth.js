import { Router } from 'express';
import passport from 'passport';

import * as authController from '../../controllers/authController';
import passportMiddleware from '../../middleware/passportUser';
import CONSTANTS from '../../utils/constants';
import * as authValidator from '../../validators/authValidator';

passportMiddleware(passport);

const router = Router();

// GET /api/v1/auth
router.post('/', passport.authenticate(CONSTANTS.PASSPORT_USER, { session: false }), authController.getInfo);

// POST /api/v1/auth/token
router.post('/', authValidator.loginValidator, authController.login);

export default router;
