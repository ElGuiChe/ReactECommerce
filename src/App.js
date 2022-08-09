import "./App.css";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {Routes, Route} from "react-router-dom";
import Tiendas from "./components/Pages/Tiendas/Tiendas";
import Contacto from "./components/Pages/Contacto/Contacto"
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import Producto from "./components/Pages/Producto/Producto"

function App() {
  return (
    <div className="App">
        <Nav/>
          <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path="/Tiendas" element={<Tiendas/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
          <Route parh="/Producto" element={<Producto/>}/>
          <Route path="/Producto/:id" element={<ProductDetailContainer/>}/>
          </Routes>
    </div>
  );
}

export default App;
