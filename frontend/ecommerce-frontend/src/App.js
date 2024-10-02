// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { addItemToCart, checkoutCart } from './api';
import './App.css'; // Assuming you have some global styles

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const userId = 'user123'; // Example user ID

  useEffect(() => {
    // Fetch products from your API or use static data
    setProducts([
      { id: 1, name: 'Product 1', price: 20, imageUrl: 'https://picsum.photos/200/200' },
      { id: 2, name: 'Product 2', price: 15, imageUrl: 'https://picsum.photos/200/200' },
      { id: 3, name: 'Product 3', price: 30, imageUrl: 'https://picsum.photos/200/200' },
      { id: 4, name: 'Product 4', price: 25, imageUrl: 'https://picsum.photos/200/200' },
      { id: 5, name: 'Product 5', price: 40, imageUrl: 'https://picsum.photos/200/200' },
      { id: 6, name: 'Product 6', price: 18, imageUrl: 'https://picsum.photos/200/200' },
    ]);
  }, []);

  const handleAddToCart = async (product) => {
    // Wrap the single product in an array to match the expected format
    const itemsToAdd = [{
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity, // Quantity from the QuantitySelector
    }];

    try {
      const response = await addItemToCart(userId, itemsToAdd);
      setCart((prevCart) => [...prevCart, ...response.order.items]);
      alert(`${product.name} added to cart`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleCheckout = async (discountCode) => {
    try {
      const response = await checkoutCart(userId, discountCode);
      alert(`Checkout successful! Total: $${response.total.toFixed(2)}`);
      setCart([]); // Clear the cart after checkout
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} onCheckout={handleCheckout} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
