import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Listado from './components/Listado'
import Detalle from './components/Detalle'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './styles/bootstrap.min.css'
import Resultados from './components/Resultados';
import Favoritos from './components/Favoritos';
import { useEffect, useState } from 'react'

function App() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favMovies = localStorage.getItem('favs')
    if (favMovies != null) {
        const favsArray = JSON.parse(favMovies)
        setFavorites(favsArray)
    }
  }, [])

  const addRemoveFavorite = (e) => {
    const favMovies = localStorage.getItem('favs')

    let tempMovieInFavs

    if (favMovies === null) {
      tempMovieInFavs = []
    } else {
      tempMovieInFavs = JSON.parse(favMovies)
    }

    const btn = e.currentTarget
    const parent = btn.parentElement
    const imgURL = parent.querySelector('img').getAttribute('src')
    const title = parent.querySelector('h5').innerText
    const overview = parent.querySelector('p').innerText
    const movieData = {
      imgURL, title, overview,
      id: btn.dataset.movieId
    }
    let movieIsInArray = tempMovieInFavs.find(movie => {
      return movie.id === movieData.id
    })
    if (!movieIsInArray) {
      tempMovieInFavs.push(movieData)
      localStorage.setItem('favs', JSON.stringify(tempMovieInFavs))
      setFavorites(tempMovieInFavs)
      console.log('Se agregó la pelicula')
    } else {
      let moviesLeft = tempMovieInFavs.filter(movie => {
        return movie.id !== movieData.id
      }) 
      localStorage.setItem('favs', JSON.stringify(moviesLeft))
      setFavorites(moviesLeft)
      console.log('Se eliminó la pelicula')
    }
  }

  return (
    <>
    <Header favorites={favorites}/>
    <div className="container mt-3">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path='/listado' element={<Listado addRemoveFavorite={addRemoveFavorite}/> } />
        <Route path='/detalle' element={<Detalle />} />
        <Route path='/resultados' element={<Resultados addRemoveFavorite={addRemoveFavorite}/>} />
        <Route path='/favoritos' element={<Favoritos addRemoveFavorite={addRemoveFavorite} favorites={favorites} />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
