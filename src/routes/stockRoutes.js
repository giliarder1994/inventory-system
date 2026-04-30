const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

router.post('/in', stockController.addStock);
router.post('/out', stockController.removeStock);

module.exports = router;