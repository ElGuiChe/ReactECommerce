import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";

let estilo = {
  ancho: "width:100px",
};

export default function Contador({ onAddItemsToCart }) {
  const [contador, setContador] = useState(1);

  function restarAlContador() {
    contador === 1 ? console.log(contador) : setContador(contador - 1);
  }

  function sumarAlContador() {
    setContador(contador + 1);
  }

  function onAdd() {
    onAddItemsToCart(contador);
    addToCart();
  }

  //Funciones del CartContext

  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          onClick={restarAlContador}
          type="button"
          className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          <i className="bi bi-dash"></i>
        </button>
        <p Style={estilo.ancho}>{contador}</p>
        <button
          onClick={sumarAlContador}
          type="button"
          className="ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
        >
          <i className="bi bi-plus"></i>
        </button>
      </div>

      <button
        onClick={() => {
          onAdd();
        }}
        type="button"
        className=" ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
      >
        Agregar al carrito
      </button>
    </>
  );
}
