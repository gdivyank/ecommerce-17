// src/components/Cart.js
import React, { useState } from 'react';
import { Typography, Button, TextField } from '@mui/material';

const Cart = ({ cart, onCheckout }) => {
  const [discountCode, setDiscountCode] = useState('');

  const handleCheckoutClick = () => {
    onCheckout(discountCode);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Your Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is currently empty.</Typography>
      ) : (
        <div>
          {cart.map((item, index) => (
            <Typography key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </Typography>
          ))}
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            Total: ${total.toFixed(2)}
          </Typography>
          <TextField
            label="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            variant="outlined"
            style={{ marginTop: '20px' }}
          />
          <Button variant="contained" color="primary" onClick={handleCheckoutClick} style={{ marginTop: '10px' }}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
