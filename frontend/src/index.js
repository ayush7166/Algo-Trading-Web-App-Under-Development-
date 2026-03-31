import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./index.css";
import AboutPage from "./leanding_page/about/about.js";
import HomePage from "./leanding_page/home/Homepage.js";
import PricingPage from "./leanding_page/pricing/pricing.js"
import ProductPage from "./leanding_page/product/product.js"
import Signup from "./leanding_page/signup/signup.js";
import SupportPage from "./leanding_page/support/support.js";
import Navbar from "./leanding_page/Navbar.js";
import Footer from "./leanding_page/Footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
