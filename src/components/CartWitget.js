import React from "react";

const Cart = () => {
  return (
    <button type="button" class="btn btn-dark position-relative">
      <i class="bi bi-cart2"></i>
      <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        4<span class="visually-hidden">unread messages</span>
      </span>
    </button>
  );
};

export default Cart;
