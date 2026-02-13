import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/client/Home";
import Products from "./pages/client/Products";
import Blogs from "./pages/client/Blogs";
import ProductDetail from "./pages/client/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Products />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/admin/products" element={<AdminProducts />} />
    </Routes>
  );
}
