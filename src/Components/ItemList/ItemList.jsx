import Item from "../Item/Item";
import styles from "./ItemList.module.css";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <ul className={styles.ul}>
        {items.map((item) => {
          return <Item key={item.id} item={item} addToCart={addToCart} />;
        })}
      </ul>
    </div>
  );
};

export default ItemList;
