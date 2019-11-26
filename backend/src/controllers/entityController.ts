import Boom from 'boom';
import { NextFunction, Request, Response } from 'express';
import { DocumentQuery } from 'mongoose';

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
export function findEntities(req: Request, res: Response, next: NextFunction) {
  const { query = {} } = req;
  const { page, pageSize, sort, order, ...filter } = query;

  const customFilter = filter;
  // Like operator
  if (customFilter.field1) {
    customFilter.field1 = { $regex: `.*${filter.field1}.*` };
  }

  const options = {} as any;
  if (sort && order) {
    options.sort = { [sort]: order };
  }

  let call: Promise<any> | DocumentQuery<any[], any>;
  if (page && pageSize) {
    options.page = page;
    options.limit = pageSize;

    call = baseService.paginate(Entity, { query: customFilter, options });
  } else {
    call = baseService.find(Entity, { filter: customFilter, options });
  }

  return call;
}

/**
 * Find entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function findEntity(req: Request, res: Response, next: NextFunction) {
  return baseService
    .findById(Entity, { id: req.params.idEntity })
    .then(row => {
      if (!row) {
        throw Boom.notFound('Entity not found');
      }

      return row;
    })
    .then(data => res.json({ data }))
    .catch((err: any) => next(err));
}

/**
 * Create entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function createEntity(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  return baseService
    .create(Entity, { docs: body })
    .then(data => res.json({ data }))
    .catch((err: any) => next(err));
}

/**
 * Update entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function updateEntity(req: Request, res: Response, next: NextFunction) {
  const { params, body } = req;

  return baseService
    .findByIdAndUpdate(Entity, { id: params.idEntity, update: body })
    .then(data => res.json({ data }))
    .catch((err: any) => next(err));
}

/**
 * Delete entity
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function deleteEntity(req: Request, res: Response, next: NextFunction) {
  return baseService
    .findByIdAndDelete(Entity, { id: req.params.idEntity })
    .then(data => res.json({ data }))
    .catch((err: any) => next(err));
}
