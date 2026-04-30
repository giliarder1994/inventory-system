const sequelize = require('../config/database');

const Product = require('./Product');
const Supplier = require('./Supplier');
const StockMovement = require('./StockMovement');

//Relacionamentos
Supplier.hasMany(Product, {foreignKey: 'supplier_id'});
Product.belongsTo(Supplier, {foreignKey: 'supplier_id'});

Product.hasMany(StockMovement, {foreignKey: 'product_id'});
Product.belongsTo(Product, {foreignKey: 'product_id'});

module.exports = {
  sequelize,
  Product,
  Supplier,
  StockMovement
};