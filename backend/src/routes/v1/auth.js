import { Router } from 'express';

import * as authValidator from '../../validators/authValidator';

/**
 * Contiene todas las rutas para la API.
 */
const router = Router();

/**
 * POST /api/v1/auth/token
 */
router.post('/', authValidator.loginValidator, (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: 'auth'
  });
});

export default router;
