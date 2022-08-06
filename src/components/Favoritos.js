import React from "react";
import { Link } from "react-router-dom";

const Favoritos = ({ favorites, addFavorites }) => {
  return (
    <>
      <div className="row">
        {favorites.map((movie, id) => {
          return (
            <div className="col-3" key={id}>
              <div className="card my-4">
                <img src={movie.imgURL} className="card-img-top" alt="..." />
                <button
                  className="favorite-btn"
                  data-movie-id={movie.id}
                  onClick={() => addFavorites(movie)}
                >
                  🧡
                </button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    {movie.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/detalle?movie_id=${movie.id}`}
                    className="btn btn-primary"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favoritos;
