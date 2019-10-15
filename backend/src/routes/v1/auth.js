import { Router } from 'express';

import * as authService from '../../services/authService';
import * as authValidator from '../../validators/authValidator';

/**
 * Contiene todas las rutas para la API.
 */
const router = Router();

/**
 * POST /api/v1/auth/token
 */
router.post('/', authValidator.loginValidator, (req, res, next) => {
  return authService
    .login(req.body.email, req.body.password)
    .then(data => {
      res.json(data);
    })
    .catch(err => next(err));
});

export default router;
