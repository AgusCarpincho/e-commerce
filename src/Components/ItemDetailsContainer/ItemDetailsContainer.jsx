import { useParams } from "react-router-dom";

const ItemDetailsContainer = () => {
  // const params = useParams();
  const { id } = useParams();

  // Si en App.jsx defino en la ruta que la parte dinamica de una ruta es
  // por ejemplo :hola entonces luego para acceder al parametro
  // tengo que usar ese mismo identificador que asigne
  // y lo acceso con params.hola

  return <div>Detalles del item {`${id}`}</div>;
};

export default ItemDetailsContainer;
