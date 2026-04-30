const stockService = require('../services/stockService');

exports.addStock = async (req, res) => {
  try{
    const {productId, quantity} = req.body;
    const result = await stockService.addStock(productId, quantity);
    res.json(result);
  }catch (err) {
    res.status(400).json({error: err.message});
  }
};

exports.removeStock = async (req, res) => {
  try {
    const {productId, quantity} = req.body;
    const result = await stockService.removeStock(productId, quantity);
    res.json(result);
  } catch (err) {
    res.status(400).json({error: err.message})
  }
};