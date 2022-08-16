//import ProductDetailContainer from "../ProductDetailContainer/ProductDetailContainer";
import Contador from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetail ({ title , description, image}) {

  //
  const [productAddedToCard, setProductAddedToCard] = useState(false);
  const onAdd = (quantityToAdd) => {
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