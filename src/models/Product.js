const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product',  {
  name: DataTypes.STRING,
  sku: DataTypes.STRING,
  quantity: {
    type:DataTypes.INTEGER,
    defaultValue: 0
  },
  min_stock: DataTypes.INTEGER,
  supplier_id: DataTypes.INTEGER
});

module.exports = Product;