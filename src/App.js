import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ApiCall from "./helpers/ApiCall";
import ApiCallDefault from "./helpers/ApiCallDefault";
import AddFavorites from "./helpers/AddFavorites";
import PrincipalRouter from "./routes/PrincipalRouter";
import "./App.css";
import "./styles/bootstrap.min.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [movieResults, setMovieResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ApiCallDefault(setMovieList);
  }, []);

  const handleSubmit = (value) => {
    ApiCall(value, (data) => {
      setMovieResults(data);
    });
    navigate(`../resultados?keyword=${value}`, { replace: true });
  };

  const addFavorites = (e) => {
    AddFavorites(e, favorites, setFavorites);
  };

  return (
    <>
      <Header onSubmit={handleSubmit} favorites={favorites} />
      <div className="container mt-3">
        <PrincipalRouter
          movieList={movieList}
          movieResults={movieResults}
          favorites={favorites}
          addFavorites={addFavorites}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
