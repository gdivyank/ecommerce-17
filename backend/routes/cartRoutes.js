// backend/routes/cartRoutes.js
const express = require('express');
const { addToCart, checkout } = require('../controllers/cartController');
const router = express.Router();

router.post('/cart/add', addToCart);
router.post('/cart/checkout', checkout);

module.exports = router;
