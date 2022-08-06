import React from "react";

const Login = () => {
  return (
    <>
      <h2>Ingresa a tu cuenta</h2>
      <form action="">
        <label>
          <span>Correo electrónico:</span>
          <br />
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          <span>Contraseña:</span>
          <br />
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};

export default Login;
