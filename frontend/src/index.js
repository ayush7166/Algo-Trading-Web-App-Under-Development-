
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
import Equity from "./leanding_page/pricing/equity.js";
import Commodity from "./leanding_page/pricing/commodity.js";
import Currency from "./leanding_page/pricing/currency.js";
import Pricing from "./leanding_page/pricing/pricing.js";

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
      <Route path="/pricing" element={<Pricing />}>
        <Route index element={<Equity />} />   {/* default */}
        <Route path="equity" element={<Equity />} />
        <Route path="commodity" element={<Commodity />} />
        <Route path="currency" element={<Currency />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
