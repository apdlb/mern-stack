import Joi from '@hapi/joi';
import { NextFunction, Request, Response } from 'express';

import validate from '../utils/validate';

const SCHEMA_LOGIN = {
  email: Joi.string()
    .label('email')
    .trim()
    .email()
    .required(),
  password: Joi.string()
    .label('password')
    .trim()
    .required()
} as any;

/**
 * Validate login data.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function loginValidator(req: Request, res: Response, next: NextFunction) {
  const { body } = req;

  return validate(body, SCHEMA_LOGIN)
    .then(() => next())
    .catch((err: any) => next(err));
}
