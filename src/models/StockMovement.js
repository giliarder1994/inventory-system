const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const StockMovement = sequelize.define('StockMovement', {
  type: {
    type: DataTypes.ENUM('IN', 'OUT')
  },
  quantity: DataTypes.INTEGER,
  product_id: DataTypes.INTEGER
});

module.exports = StockMovement;