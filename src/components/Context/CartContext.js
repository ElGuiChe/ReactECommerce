import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    const itemInCart = cart.find((itemInCart) => itemInCart.id === item.id);
    if (itemInCart) {
      const newCart = cart.map((itemInCart) => {
        if (itemInCart.id === item.id) {
          return {
            ...itemInCart,
            quantity: itemInCart.quantity + item.quantity,
          };
        } else {
          return itemInCart;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, item]);
    }
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        removeCartItem,
        clearCart,
        cart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
