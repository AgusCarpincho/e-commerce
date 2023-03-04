import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <li className={styles.li} key={item.id}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
            >
              {item.title}
            </Typography>
            <img
              className={styles.img}
              src={item.img}
              alt="Imagen de zapatillas"
            />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.description}
            </Typography>
            <Link to={`/itemDetails/${item.id}`}>
              <Button style={{ color: "white" }}>Ver detalles</Button>
            </Link>
          </CardContent>
        </Card>
      </li>
    </>
  );
};

export default Item;
