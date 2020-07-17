import Sequelize, { Model } from 'sequelize';
import { v4 as uuid } from 'uuid';

class callPrices extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        source: Sequelize.STRING,
        destination: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );

    this.beforeCreate(callPrices => (callPrices.id = uuid()));

    return this;
  }
}

export default callPrices;
