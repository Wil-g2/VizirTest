import * as Yup from 'yup';
import logger from '../../config/winston';
import Plans from '../models/Plans';

class PlansController {
  async index(request, response) {
    try {
      const { page = 1, limit = 20 } = request.query;

      const { count, rows } = await Plans.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      });

      logger.info(`PlansController (index) - executed`);

      return response.status(200).json({
        plans: rows,
        currentPage: page,
        totalCount: count,
      });
    } catch (err) {
      logger.error(`PlansController (index) - error=${err}`);
      return response.status(400).json({
        error: 'Error in get plans.',
      });
    }
  }

  async show(request, response) {
    try {
      const { id } = request.params;

      const plans = await Plans.findOne({
        where: {
          id,
        },
      });

      if (!plans) {
        return response.status(404).json({ error: 'Plans not found' });
      }

      return response.status(200).json(plans);
    } catch (err) {
      logger.error(`PlansController (show) - error=${err}`);
      return response.status(400).json({
        error: 'Error in get PlansController by id.',
      });
    }
  }

  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        title: Yup.string().required(),
        minutes: Yup.string().required(),
        increase: Yup.number().required(),
      });
      await schema.validate(request.body, { abortEarly: false });

      const planExists = await Plans.findOne({
        where: { title: request.body.title },
      });

      if (planExists) {
        return response.status(404).json({ error: 'Plan already exists.' });
      }

      const plan = await Plans.create({
        title: request.body.title,
        minutes: request.body.minutes,
        increase: request.body.increase,
      });

      logger.info(`PlansController (store) - executed`);
      return response.status(200).json(plan);
    } catch (err) {
      logger.error(`PlansController (store) - error=${err}`);
      return response.status(400).json({
        error: 'Validation fails.',
        messages: err.inner,
      });
    }
  }
}

export default new PlansController();
