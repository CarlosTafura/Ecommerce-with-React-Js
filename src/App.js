import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListConteiner";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Ofline from "./Components/Error/Ofline.js";
import CustomProvider  from "./context/CartContext";

const App = () => {
  //pasando al NavBar
  const name = "Carlos";
  const lastname = "Tafura";
  const branch = "onlineShop";

  return (
    <>
      <BrowserRouter>
        <CustomProvider >
          <NavBar name={name} lastname={lastname} />

            <Routes>
             <Route path="/" element={<ItemListContainer greeting={branch} />} />
             <Route path="/categories/:categoryID" element={<ItemListContainer greeting={branch} />} />
             <Route path="/product/:id" element={<ItemDetailContainer />} />
             <Route path="/cart" element={<Cart />} />
             <Route path="*" element={<Ofline />} />
            </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
