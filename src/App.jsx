import Navbar from "./Components/Navbar/Navbar";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import CartContextProvider from "./context/CartContext";
// Con estos componentes podemos simular la navegacion entre diferentes paginas de nuestra SPA
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailsContainer from "./Components/ItemDetailsContainer/ItemDetailsContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const onAdd = (aQuantity) => {
    console.log(`Se agregaron ${aQuantity} elementos`);
  };
  /*
  <Route path="/form" element={<Formulario />} />
  */
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<h1>Estoy en el carrito</h1>} />
              <Route
                path="/itemDetails/:id"
                element={<ItemDetailsContainer />}
              />
              <Route path="*" element={<h1>Error 404 Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </ThemeProvider>
    </>
  );
}
// Lo que esta fuera del componente Routes , por ejemplo Navbar lo que sucedera es que estara el Navbar disponible para todas las rutas
// mientras que solo cambiaria el contenido definido en cada Route

/* <ThemeProvider theme={darkTheme}>
            <Navbar />
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <ItemListContainer />
            <ConsumingAPIs />
          </ThemeProvider>*/
export default App;
