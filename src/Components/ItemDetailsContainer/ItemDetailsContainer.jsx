import { useParams } from "react-router-dom";
import { products } from "../ItemListContainer/productsMock";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ItemDetailsContainer = () => {
  // const params = useParams();
  const { id } = useParams();
  let item = products.find((product) => Number(product.id) === Number(id));

  // Si en App.jsx defino en la ruta que la parte dinamica de una ruta es
  // por ejemplo :hola entonces luego para acceder al parametro
  // tengo que usar ese mismo identificador que asigne
  // y lo acceso con params.hola

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
          alt={item.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: $ {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemDetailsContainer;
