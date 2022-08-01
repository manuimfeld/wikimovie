import React from 'react'
import { useNavigate } from 'react-router-dom'

const Buscador = () => {
  const navigate = useNavigate()
  let token = sessionStorage.getItem('token')

  const submitHandler = (e) => {
    e.preventDefault()
    const keyword = e.currentTarget.keyword.value.trim()

    if (keyword.length === 0 ) {
      alert('Por favor, ingresa una palabra clave')
    } else if (keyword.length < 4) {
        alert('Por favor, ingresa un nombre con más de 4 caracteres')
    } else {
        e.currentTarget.keyword.value = ''
        navigate(`/resultados?keyword=${keyword}`)
    }
  }

  return (
    <form action="" onSubmit={submitHandler} className="d-flex align-items-center">
        <label className="form-label mb-0 mx-2">
            <input className="form-control" type="text" name="keyword" id="" placeholder='Buscar...'/>
        </label>
        <button type="submit" className='btn btn-success'>Ingresar</button>
    </form>
  )
}

export default Buscador