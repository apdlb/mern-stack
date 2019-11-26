import jwt from 'jsonwebtoken';
import moment from 'moment';

import { IUser } from '../interfaces/models';

const secret = process.env.JWT_ENCRYPTION || 'mysecret';

/**
 * Generates new JWT.
 *
 * @param  {Object} user
 * @return {Object}
 */
export function generate(user: IUser) {
  const payload = {
    id: user._id,
    email: user.email,
    iat: moment().unix(), // Creation date
    exp: Math.floor(Date.now() / 1000) + Number(process.env.JWT_EXPIRATION) // Expiration
  };

  const token = jwt.sign(payload, secret);

  return { access_token: token, expires_in: process.env.JWT_EXPIRATION, token_type: 'Bearer' };
}

/**
 * Decode JWT.
 *
 * @param  {String} token
 * @return {Promise}
 */
export function decode(token: string) {
  return jwt.verify(token, secret);
}
