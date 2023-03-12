import { products } from "./productsMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useState } from "react";
function ItemListContainer() {
  const { category } = useParams();
  const [productsToRender, setProductsToRender] = useState(products);

  if (category === undefined) {
    return (
      <>
        <ItemList items={productsToRender} />
      </>
    );
  } else {
    return (
      <>
        <ItemList
          items={productsToRender.filter(
            (product) => product.category === category
          )}
        />
      </>
    );
  }
}

export default ItemListContainer;
