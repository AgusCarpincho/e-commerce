import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    setCart([...cart, newProduct]);
  };

  // Dentro de la propiedad value pasamos la información que queremos consumir en otros componentes
  let data = { cart: cart, addToCart: addToCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
