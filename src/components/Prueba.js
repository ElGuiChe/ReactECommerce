import React from "react";

let estilo = {
    ancho: "width:100px",
  };

function Prueba ({props}) {

  return (
    <div class="container">
    
        <h1> HOLA {props} </h1>
        
    </div>
  );
};

export default Prueba;