import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <Link to="/Carrito" class="btn btn-dark position-relative">
      <i class="bi bi-cart2"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4<span class="visually-hidden">unread messages</span>
      </span>
    </Link>
  );
};

export default Cart;