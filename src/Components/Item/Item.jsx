import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./Item.module.css";

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
            <Button style={{ color: "white" }}>Ver detalles</Button>
          </CardContent>
        </Card>
      </li>
    </>
  );
};

export default Item;
