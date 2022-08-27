import React from "react";
import { Link } from "react-router-dom";
import Buscador from "./Buscador";

const Header = ({ onSubmit, favorites }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Wikimovie
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
              {/*               <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/listado" className="nav-link">
                  Listado
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favoritos" className="nav-link">
                  Favoritos
                </Link>
              </li>
              <li className="nav-item d-flex align-items-center">
                <span className="text-success">
                  {favorites.length > 0 && (
                    <>Peliculas en Favoritos: {favorites.length}</>
                  )}
                </span>
              </li>
            </ul>
          </div>
          <Buscador onSubmit={onSubmit} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
