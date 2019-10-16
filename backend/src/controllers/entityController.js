import Entity from '../database/models/Entity';
import * as baseService from '../services/baseService';

/**
 * Find entities
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Function} next
 * @return {Promise}
 */
export function findEntities(req, res, next) {
  return baseService
    .find(Entity, { filter: req.query })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}
