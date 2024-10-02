// src/components/Checkout.js
import React, { useState } from 'react';
import { checkoutCart } from '../api';
import { Button, TextField, Typography, Card, CardContent } from '@mui/material';

const Checkout = () => {
  const [discountCode, setDiscountCode] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleCheckout = () => {
    checkoutCart(1, discountCode)
      .then((response) => {
        setOrderStatus(`Order placed! Total: ${response.total}`);
      })
      .catch(() => setOrderStatus('Error placing order.'));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Card style={{ marginBottom: '20px' }}>
        <CardContent>
          <TextField
            label="Discount Code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleCheckout}>
            Checkout
          </Button>
        </CardContent>
      </Card>
      <Typography variant="h6" color="textSecondary">{orderStatus}</Typography>
    </div>
  );
};

export default Checkout;
