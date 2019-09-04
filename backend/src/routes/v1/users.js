import { Router } from 'express';

/**
 * Contiene todas las rutas para la API.
 */
const router = Router();

/**
 * GET /api/v1/users
 */
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: 'users'
  });
});

export default router;
