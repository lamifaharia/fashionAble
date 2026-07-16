import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import router from './routes/Router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);