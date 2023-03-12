import React from "react";
import styles from "./Item.module.css";
import Button from "@mui/material/Button";
const Item = ({ item, addToCart }) => {
  return (
    <div className={styles.div}>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.description} />
      <h1>Precio: ${item.price}</h1>
      <Button onClick={addToCart}>Agregar</Button>
    </div>
  );
};

export default Item;
