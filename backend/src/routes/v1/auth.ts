import { Router } from 'express';
import passport from 'passport';

import * as authController from '../../controllers/authController';
import passportMiddleware from '../../middleware/passportUser';
import CONSTANTS from '../../utils/constants';
import * as authValidator from '../../validators/authValidator';

passportMiddleware(passport);

const router = Router();

// POST /api/v1/auth/login
router.post('/login', authValidator.loginValidator, authController.login);

// GET /api/v1/auth
router.get('/', passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }), authController.getInfo);

export default router;
