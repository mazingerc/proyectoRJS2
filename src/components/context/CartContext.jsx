import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    const updatedCart = { ...cart };
    const existingProductIndex = updatedCart.items.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex !== -1) {
      updatedCart.items[existingProductIndex].quantity += product.quantity;
    } else {
      updatedCart.items.push(product);
    }
  
    updatedCart.total = updatedCart.items.reduce((total, item) => total + item.price * item.quantity, 0);

    setCart(updatedCart);
  };
  

  const removeFromCart = (productId) => {
    const productToRemove = cart.items.find((item) => item.id === productId);
    if (productToRemove) {
      const productIndex = cart.items.indexOf(productToRemove);
      cart.items.splice(productIndex, 1);
      cart.total -= productToRemove.price * productToRemove.quantity;
      setCart({ ...cart });
    }
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
