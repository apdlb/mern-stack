import { Router } from 'express';

/**
 * Contiene todas las rutas para la API.
 */
const router = Router();

// Endpoint de presentación
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: 'v1'
  });
});

export default router;
