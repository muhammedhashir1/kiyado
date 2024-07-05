import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Header from "./header/Header";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Footer from "./footer/Footer";
import Login from "../pages/Login";

const RouterLayout = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RouterLayout;
