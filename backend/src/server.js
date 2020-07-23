import './bootstrap';
import logger from './config/winston';
import app from './app';

app.listen(process.env.PORT, () =>
  logger.info(`Server is Running port: ${process.env.APP_PORT}`)
);
