import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Detalle = () => {
  const [movie, setMovie] = useState(null)

  let token = sessionStorage.getItem('token')
  let navigate = useNavigate()

  let query = new URLSearchParams(window.location.search)
  let movieID = query.get('movie_id')

  const swAlert = (titleAlert, textAlert, iconAlert) => {
    Swal.fire({
        title: titleAlert,
        text: textAlert,
        icon: iconAlert,
        confirmButtonText: 'Ok'
    })}

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=24891d3f2c7b9acbdca7095027e29076&language=es-ES`
    axios.get(endPoint)
    .then(res => {
        const apiData = res.data
        setMovie(apiData)
    })
    .catch(err => {
        swAlert('Error', 'No se pudo obtener la información o el ID es inválido', 'error')
        navigate('../listado', {replace: true})
    })
  }, [movieID])

  return (
    <>
    { !token && <Navigate to="/" /> }

    { !movie && <div className="text-center"><h2>Cargando...</h2></div>}

    { movie && (
        <>
        <h1>Titulo: {movie.title}</h1>
        <div className="row">
            <div className="col-4">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="..." />
            </div>
            <div className="col-8">
                <h5>Fecha de estreno: {movie.release_date}</h5>
                <h5>Reseña:</h5>
                <p>{movie.overview}</p>
                <h5>Rating: {movie.vote_average}</h5>
                <h5>Géneros:</h5>
                <ul>
                    {movie.genres.map((genre, id) => {
                        return (
                            <li key={id}>{genre.name}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </>
    )}
    </>
  )
}

export default Detalle