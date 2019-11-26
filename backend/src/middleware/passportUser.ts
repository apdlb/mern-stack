import { PassportStatic } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import User from '../database/models/User';
import { ITokenPayload } from '../interfaces';
import { findById } from '../services/baseService';
import CONSTANTS from '../utils/constants';
import logger from '../utils/logger';

export default function(passport: PassportStatic) {
  passport.serializeUser(function(user: ITokenPayload, done) {
    done(null, user.id);
  });

  const opts = {} as any;
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = process.env.JWT_ENCRYPTION;

  passport.use(
    CONSTANTS.PASSPORT_USER,
    new Strategy(opts, (jwtPayload, done) => {
      return findById(User, { id: jwtPayload.id })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            // If user doesn't exists return 401 Unauthorized
            done(null, false);
          }
        })
        .catch((err: any) => {
          logger.info(err);
          done(null, false);
        });
    })
  );
}
