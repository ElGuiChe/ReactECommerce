import React from "react";
import { Link } from "react-router-dom";
import Contador from "../ItemCount/ItemCount";

function Item({ category, id, img, description, price, title }) {
  return (
    <div className="card" Style="width: 18rem;">
      <img src={img} className="card-img-top" id={id} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
        <Link to={`/Producto/${id}`} className="btn btn-primary" id={id}>
          Ver detalle
        </Link>
        
        <a href="#" className="btn btn-primary">
          Agregar al <i className="bi bi-cart"></i>
        </a>
        <hr />
        <Contador />
      </div>
    </div>
  );
}

export default Item;
