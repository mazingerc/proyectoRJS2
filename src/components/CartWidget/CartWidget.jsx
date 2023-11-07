import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Typography } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import React, { useContext } from 'react';


const CartWidget = () => {
  const { cart } = useCartContext();
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ShoppingCartIcon />
      <Typography>{itemCount}</Typography>
    </div>
    
  );
};





export default CartWidget;
