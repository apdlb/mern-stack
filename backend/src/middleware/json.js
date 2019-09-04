import Boom from 'boom';
import _ from 'lodash';

/**
 * Middleware para manejar solicitudes con JSON vacíos en peticiones POST o PUT.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export default function json(req, res, next) {
  const { body, method } = req;
  const disallowedHttpHeaders = ['POST', 'PUT'];

  if (req.is('application/json') && disallowedHttpHeaders.includes(method) && _.isEmpty(body)) {
    throw Boom.badRequest('Empty JSON');
  }

  next();
}
