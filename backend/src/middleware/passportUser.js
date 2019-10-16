import { ExtractJwt, Strategy } from 'passport-jwt';

import User from '../database/models/User';
import { findById } from '../services/baseService';
import CONSTANTS from '../utils/constants';
import logger from '../utils/logger';

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  const opts = {};
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
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
            done(null, false);
          }
        })
        .catch(err => {
          console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
          logger.info(err);
          done(null, false);
        });
    })
  );
};
