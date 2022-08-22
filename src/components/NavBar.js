import React from "react";
import Cart from "./CartWitget";
import { NavLink, Link } from "react-router-dom";
import CartWitget from "./CartWitget";

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

          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/">Todo</Link></li>
            <li><hr class="dropdown-divider"/></li>
            <li><Link class="dropdown-item" id="electronics" to="/Categoria/electronics">Electrónica</Link></li>
            <li><Link class="dropdown-item" id="jewelery" to="/Categoria/jewelery">Joyería</Link></li>
            <li><Link class="dropdown-item" id="men's clothing" to="/Categoria/men's clothing">Ropa de Hombre</Link></li>
            <li><Link class="dropdown-item" id="women's clothing" to="/Categoria/women's clothing">Ropa de Mujer</Link></li>
          </ul>
        </li>

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
        <CartWitget />
      </div>
    </nav>
  );
};

export default Nav;
