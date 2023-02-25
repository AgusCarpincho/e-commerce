import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <section className={styles.cartWidget}>
      <ShoppingCartIcon></ShoppingCartIcon>
      <Button className={styles.button}>Ver carrito</Button>
    </section>
  );
};

export default CartWidget;
