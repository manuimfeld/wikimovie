import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Listado from "../components/Listado";
import Detalle from "../components/Detalle";
import Resultados from "../components/Resultados";
import Favoritos from "../components/Favoritos";

const PrincipalRouter = ({
  movieList,
  movieResults,
  favorites,
  addFavorites,
}) => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          path="/listado"
          element={
            <Listado
              movieList={movieList}
              addFavorites={addFavorites}
              favorites={favorites}
            />
          }
        />
        <Route path="/detalle" element={<Detalle />} />
        <Route
          path="/resultados"
          element={<Resultados movieResults={movieResults} />}
        />
        <Route
          path="/favoritos"
          element={
            <Favoritos favorites={favorites} addFavorites={addFavorites} />
          }
        />
      </Routes>
    </>
  );
};

export default PrincipalRouter;
