import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
  return (
    <section className={styles.cartWidget}>
      <Button className={styles.button}>
        <ShoppingCartIcon />
        Ver carrito
      </Button>
    </section>
  );
};

export default CartWidget;
