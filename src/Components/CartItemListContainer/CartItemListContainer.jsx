import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemsList from "../CartItemsList/CartItemsList";

const CartItemListContainer = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <CartItemsList items={cart} />
    </>
  );
};

export default CartItemListContainer;
