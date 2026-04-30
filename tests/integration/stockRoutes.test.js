const request = require('supertest');
const app = require('../../src/app');
const {sequelize, Product} = require('../../src/models');

describe('Stock Routes', () => {
    
    beforeAll(async () => {
        await sequelize.sync({force: true});

        await Product.create({
            name: 'Produto Teste',
            sku: 'TEST123',
            quantity: 10,
            min_stock: 5
        });
    });

    afterAll(async () => {
        await sequelize.close();
    });

    test('POST /stock/in deve adicionar estoque', async () => {
        const response = await request(app)
            .post('/stock/in')
            .send({productId: 1, quantity: 5});

        expect(response.status).toBe(200);
        expect(response.body.quantity).toBe(15);
    });

    test('POST /stock/out deve remover estoque', async () => {
        const response = await request(app)
            .post('/stock/out')
            .send({productId: 1, quantity: 3});

        expect(response.status).toBe(200);
        expect(response.body.quantity).toBe(12);
    });

    afterAll(async () => {
        await sequelize.close();
    });
});