import { Router } from 'express';

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import options from '../swagger';

import PlansController from './app/controllers/PlansController';
import CallPricesController from './app/controllers/CallPricesController';
import billController from './app/controllers/billController';

const routes = new Router();
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJsDoc(options);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
/**
 * @swagger
 * /call-prices/{id}:
 *  get:
 *    summary: Get a call price by ID
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to request all call prices by id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/call-prices/:id', CallPricesController.show);

/**
 * @swagger
 * /call-prices:
 *  get:
 *    summary: Get all call prices
 *    description: Use to request all call prices
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/call-prices', CallPricesController.index);

/**
 * @swagger
 * /call-prices:
 *  post:
 *    summary: Create a new Call Price
 *    description: Use to request all call prices
 *    parameters:
 *    - in: "body"
 *      name: "body"
 *      description: "Created user object"
 *      required: true
 *      schema:
 *        $ref: "#/definitions/call-prices"
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/call-prices', CallPricesController.store);

/**
 * @swagger
 * /plans/{id}:
 *  get:
 *    summary: Get a all plans by ID
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *    description: Use to request all plans by id
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/plans/:id', PlansController.show);

/**
 * @swagger
 * /plans:
 *  get:
 *    summary: Get all Plans
 *    description: Use to request all call Plans the Telzir
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get('/plans', PlansController.index);

/**
 * @swagger
 * /plans:
 *  post:
 *    summary: Create a new Plan
 *    description: Use to request all call prices
 *    queryParams: []
 *    bodyParams: [ "title", "minutes", "increase" ]
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/plans', PlansController.store);

/**
 * @swagger
 * /bills:
 *  post:
 *    summary: Calculate a Bill
 *    description: Use to request calculate bill price
 *    queryParams: []
 *    bodyParams: [ "source", "destination", "time", "plan" ]
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.post('/bills', billController.store);

module.exports = routes;
