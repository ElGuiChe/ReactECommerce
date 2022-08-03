import React from "react";
import Contador from "../ItemCount/ItemCount";

function item({ category, id, img, description, price, title }) {
  return (
    <div class="card" Style="width: 18rem;">
      <img src={img} class="card-img-top" id={id} alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
        <a href="#" class="btn btn-primary">
          Comprar
        </a>
        <hr />
        <Contador />
      </div>
    </div>
  );
}

export default item;
