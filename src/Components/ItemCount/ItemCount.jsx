import Button from "@mui/material/Button";
import { useState } from "react";

const ItemCount = ({ stock = 0, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [stockAvailable, setStock] = useState(stock);

  const addUnit = () => {
    if (stock < counter) {
      console.log("No hay suficientes ");
    } else {
      setCounter(counter + 1);
      setStock(stockAvailable - 1);
    }
  };

  const removeUnit = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setStock(stockAvailable + 1);
    } else {
      console.log("No hay mas unidades que quitar");
    }
  };

  return (
    <div>
      <h2>Unidades: {counter}</h2>
      <h3>Stock: {stockAvailable}</h3>
      <Button onClick={addUnit}>Agregar otra unidad</Button>
      <Button onClick={removeUnit}>Quitar una unidad</Button>
      <Button
        onClick={() => {
          onAdd(counter);
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
