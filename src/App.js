import "./App.css";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {Routes, Route} from "react-router-dom";
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer";
import Producto from "./components/Pages/Producto/Producto"
import CategoryDetailContainer from "./components/Pages/CategoryDetailContainer/CategoryDetailContainer";
import Carrito from "./components/Pages/Carrito/Carrito";
import CartCustomContext from "./components/Context/CartContext";


function App() {

  return (
    <div className="App">
        <CartCustomContext>
          <Nav/>
            <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route parh="/Producto" element={<Producto/>}/>
            <Route path="/Producto/:id" element={<ProductDetailContainer/>}/>
            <Route path="/Categoria/:id" element={<CategoryDetailContainer/>}/>
            <Route path="/Carrito" element={<Carrito/>}/>
            </Routes>
        </CartCustomContext>
    </div>
  );
}

export default App;
