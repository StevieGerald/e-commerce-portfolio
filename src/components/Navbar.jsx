import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaUser, FaSearch, FaBars } from "react-icons/fa";

const Navbar = ({ search, setSearch }) => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
  localStorage.removeItem("user");
  window.location.reload();
};

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🛍️ MyStore</Link>
      </div>

      {/* Hamburger */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Search */}
      <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>

      {/* Icons */}
      <div className="nav-icons">
        <Link to="/cart" className="cart-link">
          <FaShoppingCart size={20} color="red" />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>

      {user ? (
  <div className="account-link">
    <FaUser size={20} />
    <span>Hi, {user.name}</span>
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>
  </div>
) : (
  <Link to="/account" className="account-link">
    <FaUser size={20} /> Account
  </Link>
)}
      </div>
    </nav>
  );
};

export default Navbar;