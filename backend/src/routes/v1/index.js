import { Router } from 'express';

import auth from './auth';
import entities from './entities';

const router = Router();

// Endpoint de presentación
router.get('/', (req, res) => {
  res.json({
    app: req.app.locals.title,
    apiVersion: 'v1'
  });
});

router.use('/auth/token', auth);
router.use('/entities', entities);

export default router;
