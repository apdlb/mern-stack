import { Router } from 'express';

import v1 from './v1';

/**
 * Contiene todas las rutas para la API.
 */
const router = Router();

// Endpoint de presentación
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: req.app.locals.version
  });
});

// Incluye todos los enpoints versionados como v1
router.use('/v1', v1);

export default router;
