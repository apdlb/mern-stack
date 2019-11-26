import { Router } from 'express';
import passport from 'passport';

import * as entityController from '../../controllers/entityController';
import passportMiddleware from '../../middleware/passportUser';
import CONSTANTS from '../../utils/constants';
import * as entityValidator from '../../validators/entityValidator';

passportMiddleware(passport);

const router = Router();

// GET /api/v1/entities
router.get('/', passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }), entityController.findEntities);

// POST /api/v1/entities
router.post(
  '/',
  passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }),
  entityValidator.createEntityValidator,
  entityController.createEntity
);

// GET /api/v1/entities/:idEntity
router.get('/:idEntity', passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }), entityController.findEntity);

// PATCH /api/v1/entities/:idEntity
router.patch(
  '/:idEntity',
  passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }),
  entityValidator.findEntity,
  entityController.updateEntity
);

// DELETE /api/v1/entities/:idEntity
router.delete(
  '/:idEntity',
  passport.authenticate([CONSTANTS.PASSPORT_USER], { session: false }),
  entityValidator.findEntity,
  entityController.deleteEntity
);

export default router;
