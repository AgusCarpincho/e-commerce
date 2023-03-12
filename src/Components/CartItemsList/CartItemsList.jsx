import CartItem from "../CartItem/CartItem";

const CartItemsList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </>
  );
};

export default CartItemsList;
