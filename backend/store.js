const store = {
    orders: [],
    discountCodes: [],
    itemsPurchased: 0,
    totalPurchaseAmount: 0,
    totalDiscountAmount: 0,
    nthOrder: 5, // e.g., every 5th order gets a discount code
  };
  
  module.exports = store;