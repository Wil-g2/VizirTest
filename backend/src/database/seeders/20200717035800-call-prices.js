'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'call_prices',
      [
        {
          id: uuidv4(),
          source: '011',
          destination: '016',
          price: 1.9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          source: '016',
          destination: '011',
          price: 2.9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          source: '011',
          destination: '017',
          price: 1.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          source: '017',
          destination: '011',
          price: 2.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          source: '011',
          destination: '018',
          price: 0.9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: uuidv4(),
          source: '018',
          destination: '011',
          price: 1.9,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
