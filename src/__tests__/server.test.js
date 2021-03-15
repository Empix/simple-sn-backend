const request = require('supertest');
const app = require('../app');

test('The server should be running', async () => {
  const response = await request(app).get('/');

  expect(response.statusCode).toEqual(200);
});
