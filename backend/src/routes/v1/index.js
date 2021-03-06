import { Router } from 'express';

import auth from './auth';
import users from './users';

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

router.use('/auth/token', auth);
router.use('/users', users);

export default router;
