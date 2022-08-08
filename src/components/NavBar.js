import React from "react";
import Cart from "./CartWitget";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Tiendas">
                Tiendas
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Contacto">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <Cart />
      </div>
    </nav>
  );
};

export default Nav;
