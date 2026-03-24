import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "../components/Checkout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  // 🚨 Redirect if user is not signed in
  useEffect(() => {
    if (!user) {
      navigate("/account");
    }
  }, [user, navigate]);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="empty cart"
          />
          <p>Your cart is empty</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h4>{item.name}</h4>
                <p>₦{item.price} × {item.quantity}</p>
              </div>

              <div className="cart-buttons">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="total">Total: ₦{total}</div>

          {/* ✅ Show Checkout only if user is signed in */}
          {user && (
            <Checkout
              email={user.email}
              amount={total}
              onSuccess={() => {
                toast.success("Payment Successful!");
                clearCart();
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Cart;