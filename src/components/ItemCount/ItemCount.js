import React from "react";
import { useState } from "react";
let estilo = {
  ancho:"width:100px"
}

const stock = 5
const Contador = () => {

  const [contador, setContador]= useState (1);

  function restarAlContador () {
    contador===0? console.log(contador):setContador(contador-1);
    console.log(contador);
  }

  function sumarAlContador () {
    contador===stock? console.log(contador):setContador(contador+1);
    console.log(contador);
  }

  return (  
<div class="container">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button onClick={restarAlContador}type="button" class="btn btn-primary"><i class="bi bi-dash"></i></button>
      <p Style={estilo.ancho}>{contador}</p>
      <button onClick={sumarAlContador}type="button" class="btn btn-primary"><i class="bi bi-plus"></i></button>
    </div>
</div>
  )}

export default Contador;