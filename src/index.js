import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals'
// import { FiltersProvider } from './context/filters_context';
import { ProductsProvider } from './context/products_context';
import { FiltersProvider } from "./context/filters_context";
import { AddToCartProvider } from "./context/add_to_cart_context";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <FiltersProvider>
        <AddToCartProvider>
          <App />
        </AddToCartProvider>
      </FiltersProvider>
    </ProductsProvider>
  </React.StrictMode>
);

reportWebVitals();