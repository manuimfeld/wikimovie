import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Link, Navigate} from 'react-router-dom'

const Listado = ({addRemoveFavorite}) => {
  let token = sessionStorage.getItem('token')
  const [moviesList, setMoviesList] = useState([])
  const swAlert = (titleAlert, textAlert, iconAlert) => {
    Swal.fire({
        title: titleAlert,
        text: textAlert,
        icon: iconAlert,
        confirmButtonText: 'Ok'
    })
  }

  useEffect(() => {
    const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=24891d3f2c7b9acbdca7095027e29076&language=es-ES&page=1'
    
    axios.get(endPoint)
    .then(res => {
      const apiData = res.data
      setMoviesList(apiData.results)
    })
    .catch(err => {
      swAlert('Error', 'No se pudo obtener la información', 'error')
    })
  }, [setMoviesList])

  console.log(moviesList)

  return (
    <>
    { !token && <Navigate to="/" /> }

    <div className="row">
      {moviesList.map((movie, id) => {
        return (
          <div className="col-3" key={id}>
            <div className="card my-4">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                <button className='favorite-btn' onClick={addRemoveFavorite} data-movie-id={movie.id}>🖤</button>
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                  <Link to={`/detalle?movie_id=${movie.id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Listado