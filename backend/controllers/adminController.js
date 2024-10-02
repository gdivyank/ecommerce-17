// backend/controllers/adminController.js
const store = require('../store');

const getStoreStats = (req, res) => {
  res.status(200).json({
    itemsPurchased: store.itemsPurchased,
    totalPurchaseAmount: store.totalPurchaseAmount,
    totalDiscountAmount: store.totalDiscountAmount,
    discountCodes: store.discountCodes,
  });
};

module.exports = { getStoreStats };
