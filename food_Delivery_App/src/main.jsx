import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import { AppProvider } from './Context/AppContext';
import { CartProvider } from './Context/CartContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider>
      <CartProvider>
    <App />
      </CartProvider>
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
