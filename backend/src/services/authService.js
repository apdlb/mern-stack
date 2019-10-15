import bcrypt from 'bcryptjs';
import Boom from 'boom';

import * as jwtService from './jwtService';
import * as userService from './userService';

/**
 * Request new token.
 *
 * @param  {String} email
 * @param  {String} password
 * @return {Promise}
 */
export function login(email, password) {
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
export async function validateCredentials(email, password) {
  const user = await userService.getUser({ email });

  if (!user) {
    throw Boom.notFound('This user is not registered in the system.');
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw Boom.unauthorized('Invalid password');
  }

  return user;
}
