//import ProductDetailContainer from "../ProductDetailContainer/ProductDetailContainer";
import Contador from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "../Context/CartContext"

export default function ProductDetail ({ title , description, image, id, price}) {

  //Uso del Context
const {addCartItem} = useContext(CartContext)
//

  //
  const [productAddedToCard, setProductAddedToCard] = useState(false);
  const onAdd = (quantityToAdd) => {
    //Props enviadas al context
    addCartItem({id, title, image, price, quantity: quantityToAdd})
    //
    console.log(quantityToAdd);
    setProductAddedToCard(true);
};

//


  
  return (
      <div className="container">
        <img src={image}></img>
          <span>{title} </span>
          <p>{description}</p>
          <hr />
          {productAddedToCard ? <Link className="btn btn-primary" to="/Carrito" >Producto agregado, ver carrito!</Link> : (
        <Contador
        onAddItemsToCart={onAdd}/>
  )}
      </div>
  );
}