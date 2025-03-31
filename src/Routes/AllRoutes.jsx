import HomePage from "../pages/HomePage";
import ShoopingPage from "../pages/ShoopingPage";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import PayoutPage from "../pages/PayoutPage";


import { Route, Routes } from "react-router-dom";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/shoopingpage" element={<ShoopingPage />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/payout" exact element={<PayoutPage />} />
    </Routes>
  );
}
