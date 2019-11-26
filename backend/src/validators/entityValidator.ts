import Joi from '@hapi/joi';
import Boom from 'boom';
import { NextFunction, Request, Response } from 'express';

import Entity from '../database/models/Entity';
import { IEntity } from '../interfaces/models';
import * as baseService from '../services/baseService';
import validate from '../utils/validate';

const SCHEMA_CREATE_ENTITY = {
  field1: Joi.string()
    .label('field1')
    .trim()
    .required(),
  field2: Joi.number()
    .label('field2')
    .integer()
    .optional(),
  field3: Joi.boolean()
    .label('field3')
    .optional()
} as any;

const SCHEMA_UPDATE_ENTITY = SCHEMA_CREATE_ENTITY;

/**
 * Validate data for create row.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function createEntityValidator(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  return validate(body, SCHEMA_CREATE_ENTITY)
    .then(() => next())
    .catch((err: any) => next(err));
}

/**
 * Validate existance of row.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function findEntity(req: Request, res: Response, next: NextFunction) {
  return baseService.findById(Entity, { id: req.params.idEntity }).then((row: IEntity) => {
    if (!row) {
      return next(Boom.notFound('Entity not found'));
    }

    return next();
  });
}

/**
 * Validate data for update row.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function updateEntityValidator(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  return validate(body, SCHEMA_UPDATE_ENTITY)
    .then(() => next())
    .catch((err: any) => next(err));
}
