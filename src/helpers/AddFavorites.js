const AddFavorites = (movie, favorites, setFavorites) => {
  if (favorites.find((f) => f === movie)) {
    setFavorites(favorites.filter((f) => f !== movie));
  } else {
    setFavorites([...favorites, movie]);
  }
};
export default AddFavorites;
