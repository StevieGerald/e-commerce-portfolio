import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { products } from "./data/products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { useState } from "react";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Home products={products} search={search} />} />
        <Route path="/products" element={<Home products={products} search={search} />} />
        <Route path="/deals" element={<Home products={products} search={search} />} />
        <Route path="/about" element={<Home products={products} search={search} />} />
         <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;