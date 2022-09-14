import React from "react";
import { Link } from "react-router-dom";
import CartWitget from "./CartWitget";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Todo</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" id="electronics" to="/Categoria/zfnCtAQ2M3qekzJgnSrR">Electrónica</Link></li>
            <li><Link className="dropdown-item" id="jewelery" to="/Categoria/5zydxnjix18Ejqe8fOCl">Joyería</Link></li>
            <li><Link className="dropdown-item" id="men's clothing" to="/Categoria/fkkmgoLM5fT52QEXU4Kd">Ropa de Hombre</Link></li>
            <li><Link className="dropdown-item" id="women's clothing" to="/Categoria/Mi08dEquSzG6yGiWIkWW">Ropa de Mujer</Link></li>
          </ul>
        </li>
          </ul>
        </div>
        <CartWitget />
      </div>
    </nav>
  );
};

export default Nav;
