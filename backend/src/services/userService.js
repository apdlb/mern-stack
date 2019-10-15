import User from '../database/models/user';
import { decode } from '../services/jwtService';

/**
 * Get user by id.
 *
 * @param  {String} id
 * @return {Promise}
 */
export function getUserById(id) {
  return User.findById(id);
}

/**
 * Get one user filtering by some attribute.
 *
 * @param  {Object} filter
 * @return {Promise}
 */
export function getUser(filter) {
  return User.findOne(filter);
}

/**
 * Get the user who owns the token with which the call is made
 *
 * @param  {String} token
 * @return {Promise}
 */
export function getMe(token) {
  const user = decode(token.split(' ')[1]);

  return getUserById(user.id);
}
