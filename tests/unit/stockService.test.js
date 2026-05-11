const stockService = require('../../src/services/stockService');
const {Product, StockMovement, sequelize} = require('../../src/models');
const { beforeEach } = require('node:test');

jest.mock('../../src/models');

describe('Stock Service', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve adicionar estoque corretamente', async () => {
    const mockProduct = {
      id: 1,
      quantity: 10,
      save: jest.fn()
    };

    Product.findByPk.mockResolvedValue(mockProduct);

    sequelize.transaction.mockImplementation(async (callback) => {
      return callback({});
    });

    const result = await stockService.addStock(1, 5);

    expect(result.quantity).toBe(15);
    expect(mockProduct.save).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "IN",
        quantity: 5
      }),
      expect.anything()
    );
  });

  test('deve lançar erro se o estoque for insuficiente', async () => {
    const mockProduct = {
      id: 1,
      quantity: 2,
      save: jest.fn()
    };

    Product.findByPk.mockResolvedValue(mockProduct);

    sequelize.transaction.mockImplementation(async (callback) => {
      return callback({});
    });

    await expect(
      stockService.removeStock(1, 5)
    ).rejects.toThrow('Estoque insuficiente');
  });

});
