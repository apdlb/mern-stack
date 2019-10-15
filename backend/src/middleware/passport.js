import { ExtractJwt, Strategy } from 'passport-jwt';

import { getUser } from '../services/userService';
import logger from '../utils/logger';

// Encryption key for JWT
const secret = process.env.JWT_ENCRYPTION;

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  let opts = {};

  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = secret;

  passport.use(
    new Strategy(opts, (jwtPayload, done) => {
      return getUser({ _id: jwtPayload.id })
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            // If user doesn't exists return 401 Unauthorized
            done(null, false);
          }
        })
        .catch(err => {
          logger.info(err);
          done(null, false);
        });
    })
  );
};
