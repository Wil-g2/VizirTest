const request = require('supertest');
const app = require('../../src/app');
import truncate from '../utils/truncate';
import Plans from '../../src/app/models/Plans';

describe('Plans', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register a new Plan', async () => {
    const response = await request(app)
      .post(`/plans`)
      .send({
        title: 'FaleMais 30',
        minutes: 30,
        increase: 10.0,
      });

    expect(response.status).toBe(200);
  });

  it('should return a json with Plans', async () => {
    await Plans.create({ title: 'FaleMais 40', minutes: 30, increase: 10.0 });
    const response = await request(app).get('/plans');
    expect(response.status).toBe(200);
  });
});
