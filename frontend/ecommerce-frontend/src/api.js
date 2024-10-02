// src/api.js
const BASE_URL = 'http://localhost:5018/api'; // Adjust the base URL as necessary

export const addItemToCart = (userId, items) => {
  return fetch(`${BASE_URL}/cart/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, items }),
  }).then((res) => res.json());
};

export const checkoutCart = (userId, discountCode) => {
  return fetch(`${BASE_URL}/cart/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, discountCode }),
  }).then((res) => res.json());
};

export const getAdminStats = () => {
  return fetch(`${BASE_URL}/admin/stats`, {
    method: 'GET',
  }).then((res) => res.json());
};
