import Navbar from "./Components/Navbar/Navbar";
// import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

//<ItemListContainer />

function App() {
  const onAdd = (aQuantity) => {
    console.log(`Se agregaron ${aQuantity} elementos`);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <ItemListContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
