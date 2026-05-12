const stockService = require('../../src/services/stockService');
const { Product, StockMovement, sequelize } = require('../../src/models');

jest.mock('../../src/models');

describe('Stock Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve adicionar estoque corretamente', async () => {
    const mockProduct = {
      id: 1,
      quantity: 10,
      save: jest.fn().mockResolvedValue(true)
    };

    Product.findByPk.mockResolvedValue(mockProduct);
    
    // Mock da transação do Sequelize
    sequelize.transaction.mockImplementation(async (callback) => {
      return callback({});
    });

    const result = await stockService.addStock(1, 5);

    // Verificações
    expect(result.quantity).toBe(15);
    expect(mockProduct.save).toHaveBeenCalled(); // Verifica se salvou o produto
    
    // VERIFICAÇÃO CORRETA: Se criou a movimentação de estoque
    expect(StockMovement.create).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'IN',
        quantity: 5,
        product_id: 1
      }),
      expect.anything()
    );
  });

  test('deve lançar erro se o estoque for insuficiente', async () => {
    const mockProduct = {
      id: 1,
      quantity: 2
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