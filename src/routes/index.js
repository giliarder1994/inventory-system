const express = require('express');
const router = express.Router();

router.use('/stock', require('./stockRoutes'));
router.use('/products', require('./productRoutes')); 
router.use('/suppliers', require('./supplierRoutes'));

module.exports = router;
