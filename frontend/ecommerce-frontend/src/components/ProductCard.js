// src/components/ProductCard.js
import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card style={{ margin: '10px', maxWidth: '240px' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
        style={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body1" color="textSecondary" style={{ marginBottom: '10px' }}>
          ${product.price.toFixed(2)}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onAddToCart(product)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
