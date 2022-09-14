import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../components/Context/CartContext";

const CartWitget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart
    .map((item) => item.quantity)
    .reduce((prev, curr) => prev + curr, 0);

  //Muestra u oculta el badge de botón carrito dependiendo de su estado

  let hide = "hidden";

  if (cart.length === 0) {
    console.log(hide);
  } else {
    hide = " ";
  }

  return (
    <Link to="/Carrito" className="btn btn-dark position-relative">
      <i className="bi bi-cart2"></i>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        Style={`visibility: ${hide}`}
      >
        {totalQuantity}
      </span>
    </Link>
  );
};

export default CartWitget;
