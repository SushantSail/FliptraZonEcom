import React from 'react';
import './App.css';
import Header from "./components/Header";
import AllRoutes from "./Routes/AllRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";

import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext';


export default function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <CartProvider>
          <Header />
          <main>
            <AllRoutes />
          </main>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}