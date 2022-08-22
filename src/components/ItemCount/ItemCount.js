import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";

let estilo = {
  ancho: "width:100px",
};

export default function Contador({onAddItemsToCart}) {
  const stock = 5;

  const [contador, setContador] = useState(1);

  function restarAlContador() {
    contador === 0 ? console.log(contador) : setContador(contador - 1);
  }

  function sumarAlContador() {
    contador === stock ? console.log(contador) : setContador(contador + 1);
  }

  function onAdd() {
    console.log(contador);
    onAddItemsToCart(contador);
    addToCart();
  }

  //Funciones del CartContext

  const {addToCart} = useContext(CartContext);

  return (
    <div class="container">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={restarAlContador}
          type="button"
          class="btn btn-primary"
        >
          <i class="bi bi-dash"></i>
        </button>
        <p Style={estilo.ancho}>{contador}</p>
        <button onClick={sumarAlContador} type="button" class="btn btn-primary">
          <i class="bi bi-plus"></i>
        </button>
      </div>
      <button onClick={()=>{
        onAdd();
        }}
        type="button" class="btn btn-primary">
        Agregar al carrito
      </button>
    </div>
  );
}
