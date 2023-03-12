import Button from "@mui/material/Button";
import logo from "../../images/capy.ico";
import CartWidget from "../CartWidget/CartWidget";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <section className={styles.navbarOptions}>
              <section className={styles.logo}>
                <Link to="/">
                  <img
                    className={styles.logo}
                    src={logo}
                    alt="Logo del e-commerce"
                  />
                </Link>
                <Link className={styles.link} to="/">
                  Capyshop
                </Link>
              </section>
              <ul className={styles.navbarOptions}>
                <li>
                  <Button onClick={() => {}}>
                    <Link className={styles.link} to={`/category/${"mates"}`}>
                      Mates
                    </Link>
                  </Button>
                </li>
                <li>
                  <Button onClick={() => {}}>
                    <Link className={styles.link} to={`/category/${"figuras"}`}>
                      Figuras
                    </Link>
                  </Button>
                </li>
              </ul>
            </section>
          </Typography>
          <section>
            <Link to="/cart">
              <CartWidget />
            </Link>
          </section>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
