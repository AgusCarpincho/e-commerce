import Button from "@mui/material/Button";
import logo from "../../images/capy.ico";
import CartWidget from "../CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <section className={styles.navbarOptions}>
              <section className={styles.logo}>
                <a href="/">
                  <img
                    className={styles.logo}
                    src={logo}
                    alt="Logo del e-commerce"
                  />
                </a>
              </section>
              <ul className={styles.navbarOptions}>
                <li>
                  <Button className={styles.button}>Lo más vendido</Button>
                </li>
                <li>
                  <Button className={styles.button}>Ofertas</Button>
                </li>
                <li>
                  <Button>Sin costo de envío</Button>
                </li>
              </ul>
            </section>
          </Typography>
          <section>
            <CartWidget></CartWidget>
          </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
