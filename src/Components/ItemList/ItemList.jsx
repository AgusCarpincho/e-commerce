import Item from "../Item/Item";
import styles from "./ItemList.module.css";

const ItemList = ({ items }) => {
  return (
    <div>
      <h1>Este es el presentacional</h1>
      <ul className={styles.ul}>
        {items.map((item) => {
          return <Item item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemList;
