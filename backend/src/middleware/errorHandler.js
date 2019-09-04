import HttpStatus from 'http-status-codes';

import buildError from '../utils/buildError';
import logger from '../utils/logger';

/**
 * Middleware para manejar STATUS CODE 404 (NOT FOUND).
 *
 * @param {Object} req
 * @param {Object} res
 */
export function notFound(req, res) {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

/**
 * Middleware para manejar STATUS CODE 405 (METHOD NOT ALLOWED).
 *
 * @param {Object} req
 * @param {Object} res
 */
export function methodNotAllowed(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED)
    }
  });
}

/**
 * Middleware para manejar errores del body-parse.
 * (Por ejemplo para casos como JSON no válido enviado a través del body).
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function bodyParser(err, req, res, next) {
  logger.error(err);

  res.status(err.status).json({
    error: {
      code: err.status,
      message: HttpStatus.getStatusText(err.status)
    }
  });
}

/**
 * Middleware genérico de respuesta a errores para validación y errores internos del servidor.
 *
 * @param  {Object}   err
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
export function genericErrorHandler(err, req, res, next) {
  logger.error(err);

  let error = buildError(err);
  res.status(error.code).json({ error });
}
