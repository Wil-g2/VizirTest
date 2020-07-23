import * as Yup from 'yup';
import logger from '../../config/winston';
import callPrices from '../models/CallPrices';
import Plans from '../models/Plans';

class billController {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        source: Yup.string().required(),
        destination: Yup.string().required(),
        time: Yup.number().required(),
        plan: Yup.string().required(),
      });
      await schema.validate(request.body, { abortEarly: false });
      const { source, destination, plan, time } = request.body;
      const callPrice = await callPrices.findOne({
        where: {
          source,
          destination,
        },
      });

      if (!callPrice) {
        return response.status(404).json({ error: 'Call Price not found' });
      }

      const plans = await Plans.findOne({
        where: {
          title: plan,
        },
      });

      if (!plans) {
        return response.status(404).json({ error: 'Plan not found' });
      }

      let withPlan = 0;
      let withinPlan = 0;
      if (time > plans.minutes) {
        withPlan = (time - plans.minutes) * (callPrice.price * 1.1);
      }
      withinPlan = time * callPrice.price;

      return response.status(200).json({
        plan,
        withPlan: withPlan,
        withinPlan: withinPlan,
      });
    } catch (err) {
      logger.error(`BillController (store) - error=${err}`);
      return response.status(400).json({
        error: 'Validation fails.',
        messages: err.inner,
      });
    }
  }
}

export default new billController();
