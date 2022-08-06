import axios from "axios";

const ApiCall = (e, setMovieResults) => {
  const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=24891d3f2c7b9acbdca7095027e29076&language=es-ES&query=${e}`;
  axios
    .get(endpoint)
    .then((res) => {
      const data = res.data.results;
      setMovieResults(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default ApiCall;
