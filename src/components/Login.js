import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate, Navigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const swAlert = (titleAlert, textAlert, iconAlert) => {
    Swal.fire({
        title: titleAlert,
        text: textAlert,
        icon: iconAlert,
        confirmButtonText: 'Ok'
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === '' || password === '') {
        swAlert('Error', 'Por favor, completa todos los campos', 'error')
        return
    }

    if (email !== '' && !regexEmail.test(email)) {
        swAlert('Error', 'Ingresa un email valido', 'error')
        return
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
        swAlert('Error', 'Credenciales incorrectas', 'error')
        return
    }

    /* DESACTIVADO PARA PRODUCCIÓN */
    /* axios.post('https://challenge-react.alkemy.org', {email, password})
      .then(res => {
        swAlert('Bienvenido', 'Iniciaste sesión correctamente', 'success')
        const token = res.data.token
        sessionStorage.setItem('token', token)
        navigate('/listado')
      }) */
    /* Ejemplo de token generico */
    swAlert('Bienvenido', 'Iniciaste sesión correctamente', 'success')
    const token = new Date().getTime()
    sessionStorage.setItem('token', token)
    navigate('/listado')

  }

  let token = sessionStorage.getItem('token')

  return (
    <>
    { token && <Navigate to="/listado" /> }
    <h2>Formulario de login</h2>
    <form action="" onSubmit={submitHandler}>
        <label>
            <span>Correo electrónico:</span><br />
            <input type="email" name="email" id="" />
        </label>
        <br />
        <label>
            <span>Contraseña:</span><br />
            <input type="password" name="password" id="" />
        </label>
        <br />
        <button type="submit">Ingresar</button>
    </form>
    </>
  )
}

export default Login