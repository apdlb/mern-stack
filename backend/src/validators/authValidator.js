import Joi from '@hapi/joi';

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
};

/**
 * Validate login data.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function loginValidator(req, res, next) {
  const { body } = req;

  return validate(body, SCHEMA_LOGIN)
    .then(() => next())
    .catch(err => next(err));
}
