import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { products } from "./data/products";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { useState } from "react";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;