import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Favoritos = ({addRemoveFavorite, favorites}) => {
  let token = sessionStorage.getItem('token')

  return (
    <>
        { !token && <Navigate to="/" /> }
        <div className="row">
        {!favorites.length && <div className="col-12 text-danger">No tenés nada en favoritos</div>}
        {favorites.map((movie, id) => {
            return (
            <div className="col-3" key={id}>
                <div className="card my-4">
                <img src={movie.imgURL} className="card-img-top" alt="..." />
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

export default Favoritos