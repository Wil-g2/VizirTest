import * as Yup from 'yup';
import logger from '../../config/winston';
import CallPrices from '../models/CallPrices';

class CallPricesController {
  async index(request, response) {
    try {
      const { page = 1, limit = 20 } = request.query;

      const { count, rows } = await CallPrices.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      });

      logger.info(`CallPricesController (index) - executed`);

      return response.status(200).json({
        callPrices: rows,
        currentPage: page,
        totalCount: count,
      });
    } catch (err) {
      logger.error(`CallPricesController (index) - error=${err}`);
      return response.status(400).json({
        error: 'Error in get callPrices.',
      });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;
      const callPrices = await CallPrices.findOne({
        where: {
          id,
        },
      });

      if (!callPrices) {
        response.status(404).json({ error: 'CallPrices not found' });
      }

      return response.status(200).json(callPrices);
    } catch (err) {
      logger.error(`CallPrices (show) - error=${err}`);
      return response.status(400).json({
        error: 'Error in get CallPrices by id.',
      });
    }
  }

  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        source: Yup.string().required(),
        destination: Yup.string().required(),
        price: Yup.number().required(),
      });
      await schema.validate(request.body, { abortEarly: false });

      const { source, destination, price } = request.body;

      const callPriceExist = await CallPrices.findOne({
        where: { source, destination },
      });

      if (callPriceExist) {
        return response
          .status(400)
          .json({ error: 'CallPrices already exists.' });
      }

      const callPrice = await CallPrices.create({
        source,
        destination,
        price,
      });
      console.log(callPrice);
      logger.info(`CallPricesController (store) - executed`);

      return response.json(callPrice);
    } catch (err) {
      logger.error(`CallPricesController (store) - error=${err}`);
      return response.status(400).json({
        error: 'Validation fails.',
        messages: err.inner,
      });
    }
  }
}

export default new CallPricesController();
