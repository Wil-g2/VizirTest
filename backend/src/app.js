require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import routes from './routes';

import './database';

class AppController {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());

    //security middlewares
    this.server.use(cors());
    this.server.use(helmet());
  }

  // Routes application
  routes() {
    this.server.use(routes);
  }
}

module.exports = new AppController().server;
