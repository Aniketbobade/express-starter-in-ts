import { createLogger, format, transports } from 'winston';
import path from 'path';

// Setup winston logger
export const requestLogger = createLogger({
    level: 'info', // For logging requests
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
      })
    ),
    transports: [
      new transports.File({ filename: path.join('src', 'logs', 'requestLog.log'), level: 'info' }),
    ],
  });
  
  export const errorLogger = createLogger({
    level: 'error', // For logging errors
    format: format.combine(
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
      })
    ),
    transports: [
      new transports.File({ filename: path.join('src', 'logs', 'errorLog.log'), level: 'error' }),
    ],
  });