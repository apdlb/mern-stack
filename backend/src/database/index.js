import mongoose from 'mongoose';

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
});

export default mongoose;
