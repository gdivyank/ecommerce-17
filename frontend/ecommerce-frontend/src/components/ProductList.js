// src/components/ProductList.js
import React, { useState } from 'react';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <QuantitySelector product={product} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
};

const QuantitySelector = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="quantity-selector">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductList;
