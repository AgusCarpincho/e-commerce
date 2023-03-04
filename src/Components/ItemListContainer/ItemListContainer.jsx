import { useState, useEffect } from "react";
import { products } from "./productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  const productsFilteredByCategory = products.filter(
    (product) => product.category === category
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(category ? productsFilteredByCategory : products);
    });

    productList
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {});
  }, [category]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
}

export default ItemListContainer;
