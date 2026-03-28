import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    delivery: "pickup",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = form.delivery === "delivery" ? 2000 : 0;
  const finalAmount = total + deliveryFee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    const orderData = {
      ...form,
      total: finalAmount,
      date: new Date().toLocaleString(),
    };

    // ✅ Save order
    localStorage.setItem("order", JSON.stringify(orderData));

    // ✅ Clear cart context and localStorage immediately
    clearCart();
    localStorage.removeItem("cart");
    localStorage.removeItem("cartTotal");

    // ✅ Navigate to confirmation page
    navigate("/order-success");
  };

  return (
    <div className="checkout-container">
      {/* LEFT - FORM */}
      <div className="checkout-form">
        <h2>Billing Details</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />

        <label>Delivery Method</label>
        <select name="delivery" onChange={handleChange}>
          <option value="pickup">Pickup</option>
          <option value="delivery">Home Delivery</option>
        </select>
      </div>

      {/* RIGHT - SUMMARY */}
      <div className="checkout-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₦{total}</span>
        </div>
        <div className="summary-row">
          <span>Delivery</span>
          <span>₦{deliveryFee}</span>
        </div>
        <hr />
        <div className="summary-total">
          <span>Total</span>
          <span>₦{finalAmount}</span>
        </div>

        {/* Paystack Checkout Button */}
        <Checkout
          email={form.email}
          amount={finalAmount}
          onSuccess={handleSuccess}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;