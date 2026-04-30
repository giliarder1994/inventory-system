const express = require('express');
const router = express.Router();

router.use('/stock', require('./stockRoutes'));

module.exports = router;