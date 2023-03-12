import CartItem from "../CartItem/CartItem";
import styles from "./CartItemsList.module.css";
const CartItemsList = ({ items }) => {
  return (
    <>
      <h3 className={styles.title}>Lista de productos en el carrito</h3>
      <div className={styles.container}>
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default CartItemsList;
