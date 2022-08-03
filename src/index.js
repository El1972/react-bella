import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals'
// import { FiltersProvider } from './context/filters_context';
import { ProductsProvider } from './context/products_context';
import { DataProvider } from "./context/data_context";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProductsProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ProductsProvider>
  </React.StrictMode>
);

reportWebVitals();