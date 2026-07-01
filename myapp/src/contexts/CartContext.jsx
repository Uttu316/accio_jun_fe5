import { createContext, useState } from "react";

export const CartContext = createContext(); // step 1

//step 2: create provider and pass variables in value
const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  const removeFromCart = (id) => {
    const remainingCart = cart.filter((i) => i.id !== id);
    setCart(remainingCart);
  };
  const isInCart = (id) => {
    return cart.find((i) => i.id === id);
  };
  const cartSize = cart.length;
  return (
    <CartContext
      value={{ cart, addToCart, removeFromCart, isInCart, cartSize }}
    >
      {props.children}
    </CartContext>
  );
};
export default CartProvider;
