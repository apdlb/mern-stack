import { decode } from 'querystring';

import User from '../database/models/User';
import * as authService from '../services/authService';
import * as baseService from '../services/baseService';

/**
 * Login user
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function login(req, res, next) {
  return authService
    .login(req.body.email, req.body.password)
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * User logged info
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 * @return {Promise}
 */
export function getInfo(req, res, next) {
  const {
    headers: { authorization }
  } = req;
  const user = decode(authorization.split(' ')[1]);

  return baseService
    .findById(User, { id: user.id })
    .then(data => res.json({ data }))
    .catch(err => next(err));
}
