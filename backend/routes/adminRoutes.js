// backend/routes/adminRoutes.js
const express = require('express');
const { getStoreStats } = require('../controllers/adminController');
const router = express.Router();

router.get('/admin/stats', getStoreStats);

module.exports = router;
