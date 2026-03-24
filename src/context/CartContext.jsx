import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cart items now include quantity
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity if already in cart
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item completely
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Decrease quantity by 1
  const decreaseQuantity = (id) => {
    const item = cart.find((i) => i.id === id);
    if (item.quantity === 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};