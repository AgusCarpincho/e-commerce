import React from "react";
import styles from "./Item.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Item = ({ item, addToCart }) => {
  return (
    <div className={styles.div}>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.description} />
      <h1>Precio: ${item.price}</h1>
      <Button onClick={() => addToCart(item)}>Agregar</Button>
      <Link to={`/itemDetails/${item.id}`}>
        <Button>Ver detalles</Button>
      </Link>
    </div>
  );
};

export default Item;
