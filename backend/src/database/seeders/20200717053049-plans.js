'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'plans',
      [
        {
          id: uuidv4(),
          title: 'FaleMais 30',
          minutes: 30,
          increase: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: 'FaleMais 60',
          minutes: 60,
          increase: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          title: 'FaleMais 120',
          minutes: 120,
          increase: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
