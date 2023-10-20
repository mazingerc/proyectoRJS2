import  { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    setCart((prevCart) => ({
      items: [...prevCart.items, product],
      total: prevCart.total + product.price,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => ({
      items: prevCart.items.filter((item) => item.id !== productId),
      total: prevCart.total - findProductById(productId).price,
    }));
  };

  const findProductById = (productId) => {
    return cart.items.find((item) => item.id === productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
