import { Router } from 'express';

import billController from './app/controllers/billController';

const routes = new Router();

routes.post('/bills', billController.store);

module.exports = routes;
