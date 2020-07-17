const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `{ "timestamp":"${timestamp}","level":"${level}", "message": "${message}" }`;
});

const logger = createLogger({
  format: combine(timestamp(), logFormat),
  transports: [new transports.File({ filename: process.env.LOG_NAME })],
});

export default logger;
