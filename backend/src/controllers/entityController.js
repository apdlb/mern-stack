import Boom from 'boom';

import Entity from '../database/models/Entity';
import * as baseService from '../services/baseService';

/**
 * Find entities
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function findEntities(req, res, next) {
  const { query = {} } = req;
  const { page, pageSize, sort, order, ...filter } = query;

  const customFilter = filter;
  // Like operator
  if (customFilter.field1) {
    customFilter.field1 = { $regex: `.*${filter.field1}.*` };
  }

  const options = {};
  if (sort && order) {
    options.sort = { [sort]: order };
  }

  let call;
  if (page && pageSize) {
    options.page = page;
    options.limit = pageSize;

    call = baseService.paginate(Entity, { query: customFilter, options });
  } else {
    call = baseService.find(Entity, { filter: customFilter, options });
  }

  return call.then(data => res.json({ data })).catch(err => next(err));
}

/**
 * Find entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function findEntity(req, res, next) {
  return baseService
    .findById(Entity, { id: req.params.idEntity })
    .then(row => {
      if (!row) {
        throw Boom.notFound('Entity not found');
      }

      return row;
    })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function createEntity(req, res, next) {
  const { body } = req;

  return baseService
    .create(Entity, { docs: body })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Update entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function updateEntity(req, res, next) {
  const { params, body } = req;

  return baseService
    .findByIdAndUpdate(Entity, { id: params.idEntity, update: body })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Delete entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function deleteEntity(req, res, next) {
  return baseService
    .findByIdAndDelete(Entity, { id: req.params.idEntity })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}
