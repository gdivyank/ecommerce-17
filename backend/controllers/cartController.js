// backend/controllers/cartController.js
const store = require('../store');

const addToCart = (req, res) => {
  const { userId, items } = req.body;
  const order = {
    userId,
    items,
    totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };
  store.orders.push(order);
  res.status(200).json({ message: 'Item added to cart', order });
};

const checkout = (req, res) => {
  const { userId, discountCode } = req.body;
  const order = store.orders.find(o => o.userId === userId);

  if (!order) {
    return res.status(400).json({ message: 'Order not found' });
  }

  let finalPrice = order.totalPrice;
  if (discountCode && store.discountCodes.includes(discountCode)) {
    finalPrice *= 0.9; 
    store.discountCodes = store.discountCodes.filter(code => code !== discountCode); 
  }

  store.itemsPurchased += order.items.reduce((sum, item) => sum + item.quantity, 0);
  store.totalPurchaseAmount += finalPrice;

  if (store.orders.length % store.nthOrder === 0) {
    const newCode = `DISCOUNT-${Date.now()}`;
    store.discountCodes.push(newCode);
  }

  res.status(200).json({
    message: 'Checkout successful',
    total: finalPrice,
  });
};

module.exports = {
  addToCart,
  checkout,
};
