import mongoose from 'mongoose';

import Role from '../database/models/role';
import User from '../database/models/user';
import logger from '../utils/logger';

// Conexión DB
let dbString = 'mongodb://';

if (process.env.DB_USER) {
  dbString = `${dbString}${process.env.DB_USER}`;
}
if (process.env.DB_PASSWORD) {
  dbString = `${dbString}:${process.env.DB_PASSWORD}`;
}
if (process.env.DB_HOST) {
  dbString = `${dbString}${process.env.DB_HOST}`;
}
if (process.env.DB_PORT) {
  dbString = `${dbString}:${process.env.DB_PORT}`;
}
if (process.env.DB_NAME) {
  dbString = `${dbString}/${process.env.DB_NAME}`;
}

mongoose.connect(dbString, { useNewUrlParser: true, useFindAndModify: false }, err => {
  if (err) {
    logger.error('Unable to connect to database:' + err);
    process.exit(1);
  }
  logger.info('Connected to database.');

  buildRoles().then(() => {
    initialData();
  });
});

const buildRoles = async () => {
  return Role.findOne({}, (err, doc) => {
    if (!doc) {
      const roles = require('./seeds/roles.json');
      for (const role of roles) {
        const mRole = new Role(role);
        mRole.save();
      }
    }
  });
};

const initialData = async () => {
  return User.findOne({}, async (err, doc) => {
    if (!doc) {
      const users = require('./seeds/users.json');
      for (const user of users) {
        if (user.role && user.role.name) {
          const mRole = await Role.findOne({ name: user.role.name });
          user.role = mRole;
        }
        const mUser = new User(user);
        mUser.save();
      }
    }
  });
};

export default mongoose;
