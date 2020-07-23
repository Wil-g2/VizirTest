const request = require('supertest');
const app = require('../../src/app');
import CallPrices from '../../src/app/models/CallPrices';
import Plans from '../../src/app/models/Plans';

import truncate from '../utils/truncate';

describe('Bills', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to calculate a bill', async () => {
    await CallPrices.create({ source: '011', destination: '016', price: 1.9 });

    await Plans.create({ title: 'FaleMais 30', minutes: 30, increase: 10.0 });

    const response = await request(app)
      .post('/bills')
      .send({
        source: '011',
        destination: '016',
        time: 40,
        plan: 'FaleMais 30',
      });
    expect(response.status).toBe(200);
  });

  it('should return a erro 404 calculate bill in CallPrice', async () => {
    const response = await request(app)
      .post('/bills')
      .send({
        source: '011',
        destination: '016',
        time: 20,
        plan: 'FaleMais 30',
      });

    expect(response.status).toBe(404);
  });

  it('should return a erro 404 calculate bill in Plan', async () => {
    await CallPrices.create({ source: '011', destination: '016', price: 1.9 });

    const response = await request(app)
      .post('/bills')
      .send({
        source: '011',
        destination: '016',
        time: 20,
        plan: 'FaleMais 101',
      });

    expect(response.status).toBe(404);
  });

  it('should return a erro 400 calculate bill within time', async () => {
    const response = await request(app)
      .post('/bills')
      .send({
        source: '030',
        destination: '030',
        plan: 'FaleMais 30',
      });

    expect(response.status).toBe(400);
  });
});
