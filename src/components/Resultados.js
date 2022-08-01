import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Resultados = ({addRemoveFavorite}) => {
  const token = sessionStorage.getItem('token')
  let query = new URLSearchParams(window.location.search)
  let keyword = query.get('keyword')
  let navigate = useNavigate()
  const [moviesResults, setMoviesResults] = useState([])

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=24891d3f2c7b9acbdca7095027e29076&language=es-ES&query=${keyword}`
    console.log(query)
    axios.get(endPoint)
      .then(res => {
          const moviesArray = res.data.results
          
          if (moviesArray.length === 0) {
            swAlert('Error', 'No se encontraron resultados', 'error')
          }

          setMoviesResults(moviesArray)
      })
      .catch(err => {
          swAlert('Error', 'No se pudo obtener la información o el ID es inválido', 'error')
          navigate('/listado', {replace: true})
      })
  }, [keyword])

  const swAlert = (titleAlert, textAlert, iconAlert) => {
    Swal.fire({
        title: titleAlert,
        text: textAlert,
        icon: iconAlert,
        confirmButtonText: 'Ok'
    })}

  return (
    <>
    { !token && <Navigate to="/" /> }
    <h2>Buscaste: <em>{keyword}</em></h2>

    {moviesResults.length === 0 && <p>No hay resultados</p>}

    <div className="row">
      {moviesResults.map((movie, id) => {
        return (
          <div className="col-4" key={id}>
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

export default Resultados