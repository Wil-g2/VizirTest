const request = require('supertest');
const app = require('../../src/app');
import truncate from '../utils/truncate';

describe('CallPrices', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register a new callPrice', async () => {
    const response = await request(app)
      .post(`/call-prices`)
      .send({ source: '35', destination: '31', price: 1.1 });
    expect(response.status).toBe(200);
  });

  it('should not be able to register a new callPrice duplicate source and destination', async () => {
    await request(app)
      .post(`/call-prices`)
      .send({ source: '35', destination: '31', price: 1.1 });

    const response = await request(app)
      .post(`/call-prices`)
      .send({ source: '35', destination: '31', price: 1.1 });
    expect(response.status).toBe(400);
  });

  it('should not be able to register a new callPrice within price ', async () => {
    const response = await request(app)
      .post(`/call-prices`)
      .send({ source: '35', destination: '31' });
    expect(response.status).toBe(400);
  });

  it('should return a json with callPrices', async () => {
    await request(app)
      .post(`/call-prices`)
      .send({ source: '35', destination: '31', price: 1.1 });

    const response = await request(app).get('/call-prices');
    expect(response.status).toBe(200);
  });
});
