import Sequelize, { Model } from 'sequelize';
import { v4 as uuid } from 'uuid';

class Plans extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        title: Sequelize.STRING,
        minutes: Sequelize.INTEGER,
        increase: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );

    this.beforeCreate(plans => (plans.id = uuid()));

    return this;
  }
}

export default Plans;
