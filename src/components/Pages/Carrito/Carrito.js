import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const estilo = {
  ancho: "width:100px",
};

export default function Carrito() {
  const { removeCartItem, clearCart, cart, totalPrice, createOrder } = useContext(CartContext);
  console.log(cart);



  if (cart.length == 0) {
    return (
      <div className="container">
        <div>Tu carrito está vacio</div>
        <Link to="/">Vuele a la tienda</Link>
      </div>
    );
  } else {
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
        <button
          onClick={() => clearCart()}
          type="button"
          class="btn btn-primary"
        >
          Eliminar Todo
        </button>

        <button
          onClick={() => createOrder()}
          type="button"
          class="btn btn-primary"
        >
          Terminar Compra
        </button>
      </div>
    );
  }
}