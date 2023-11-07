import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import './Item.css'

const Item = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div className="item">
      <Link to={`/product/${id}`} className="item-link">
        <img src={image} alt={title} className="item-image" />
        <h2 className="item-title">{title}</h2>
        <p className="item-price">${price}</p>
      </Link>
      <Button variant="contained" color="primary">
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Item;
