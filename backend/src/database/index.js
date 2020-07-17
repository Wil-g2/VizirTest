import Sequelize from 'sequelize';

import CallPrices from '../app/models/CallPrices';
import Plans from '../app/models/Plans';

import databaseConfig from '../config/database';

const models = [CallPrices, Plans];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // pass connection to all models the application
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
