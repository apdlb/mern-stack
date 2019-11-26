import Boom from 'boom';
import { NextFunction, Request, Response } from 'express';
import _ from 'lodash';

/**
 * Middleware para manejar solicitudes con JSON vacíos en peticiones POST o PUT.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export default function json(req: Request, res: Response, next: NextFunction) {
  const { body, method } = req;
  const disallowedHttpHeaders = ['POST', 'PUT'];

  if (req.is('application/json') && disallowedHttpHeaders.includes(method) && _.isEmpty(body)) {
    throw Boom.badRequest('Empty JSON');
  }

  next();
}
