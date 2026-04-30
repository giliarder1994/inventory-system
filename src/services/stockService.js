const {Product, StockMovement, sequelize} = require('../models');

async function addStock(productId, quantity) {
  return await sequelize .transaction(async (t) => {
    const product = await Product.findByPk(productId);

    if(!product) throw new Error('Produto não encontrado');

    product.quantity += quantity;
    await product.save({transaction: t});

    await StockMovement.create({
      type: 'IN',
      quantity,
      product_id: productId
    }, {transaction: t});

    return product;
  });
}

async function removeStock(productId, quantity) {
  return await sequelize.transaction(async (t) => {
    const product = await Product.findByPk(productId);

    if(!product) throw new Error('Produto não encontrado');

    if(product.quantity < quantity) {
      throw new Error('Estoque insuficiente');
    }

    product.quantity -= quantity;
    await product.save({transaction: t});

    await StockMovement.create({
      type: 'OUT',
      quantity,
      product_id: productId
    }, {transaction: t});

    return product;
  });
}

module.exports = {
  addStock,
  removeStock
};