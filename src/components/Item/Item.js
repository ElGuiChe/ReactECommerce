import React from "react";
import { Link } from "react-router-dom";

function Item({ category, id, image, description, price, title }) {
  return (
    <div className="card" Style="width: 18rem;">
      <img src={image} className="card-img-top" id={id} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
        <Link to={`/Producto/${id}`} className="btn btn-primary" id={id}>
          Ver detalle
        </Link>

      </div>
    </div>
  );
}

export default Item;
