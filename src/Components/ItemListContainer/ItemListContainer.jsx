import { useState, useEffect } from "react";
import { products } from "./productsMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });

    productList
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
