import 'winston-daily-rotate-file';

import fs from 'fs';
import winston from 'winston';

const tsFormat = () => new Date().toISOString();
const logDir = process.env.LOGGING_DIR || 'logs';
const logLevel = process.env.LOGGING_LEVEL || 'info';

// Crear directorio de logs si no existe
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

/**
 * Formato del log
 */
const myFormat = winston.format.printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} - ${level}: ${stack ? stack : message}`;
});

/**
 * Crear nueva instancia de winston logger.
 */
const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(winston.format.errors({ stack: true })),
  transports: [
    new winston.transports.Console({
      level: 'info',
      format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: tsFormat }), myFormat)
    }),
    new winston.transports.DailyRotateFile({
      filename: `${logDir}/%DATE%-debug.log`,
      datePattern: 'YYYY-MM-DD',
      level: logLevel,
      format: winston.format.combine(winston.format.timestamp({ format: tsFormat }), winston.format.json())
    })
  ]
});

export default logger;
