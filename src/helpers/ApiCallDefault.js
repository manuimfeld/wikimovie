import axios from "axios";

const ApiCallDefault = (setMovieList) => {
  const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=24891d3f2c7b9acbdca7095027e29076&language=es-ES&page=1`;
  axios
    .get(endpoint)
    .then((res) => {
      const data = res.data.results;
      setMovieList(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default ApiCallDefault;
