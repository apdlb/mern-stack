import bcrypt from 'bcryptjs';
import Boom from 'boom';

import User from '../database/models/User';
import * as baseService from './baseService';
import * as jwtService from './jwtService';

/**
 * Request new token.
 *
 * @param  {String} email
 * @param  {String} password
 * @return {Promise}
 */
export function login(email: string, password: string) {
  // Si las credenciales son válidas génera el token JWT
  return validateCredentials(email, password).then(user => jwtService.generate(user));
}

/**
 * Validator of user credentials.
 *
 * @param  {String} email
 * @param  {String} password
 * @return {Promise}
 */
export async function validateCredentials(email: string, password: string) {
  const user = await baseService.findOne(User, { conditions: { email } });

  if (!user) {
    throw Boom.notFound('This user is not registered in the system.');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw Boom.badRequest('Invalid password');
  }

  return user;
}
