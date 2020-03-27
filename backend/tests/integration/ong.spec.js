const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
    .post('/ongs')
   // .set('Authorization', 'id'); Caso precise do id da ONG
    .send({
      name : "PC",
      email : "contato@crianca.com.br",
      whatsapp : "6293262300",
      city : "Campinorte",
      uf : "GO"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});