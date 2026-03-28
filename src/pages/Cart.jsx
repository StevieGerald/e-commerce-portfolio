import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

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

          <button
            className="pay-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;