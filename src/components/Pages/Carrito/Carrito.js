import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const estilo = {
  ancho: "width:100px",
};

export default function Carrito() {
  const { removeCartItem, clearCart, cart} = useContext(CartContext);
  console.log(cart);

const totalPrice = cart.map (item => item.price).reduce((prev,curr)=>prev+curr,0)

  return (
    <div className="container">
      <div className="row">
        {cart.map((item) => {
          return (
            <>
              <img src={item.image} Style={estilo.ancho} />
              <div>
                {`Nombre: ${item.title} ID: ${item.id} Cantidad: ${item.quantity} Precio: ${item.price}`}
                <button
                  onClick={() => removeCartItem(item.id)}
                  type="button"
                  class="btn btn-primary"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>
            </>
          );
        })}
      </div>
      {`Total a pagar: ${totalPrice}`}
      <button onClick={() => clearCart()} type="button" class="btn btn-primary">
        Eliminar Todo
      </button>
    </div>
  );
}
