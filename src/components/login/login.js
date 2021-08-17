import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="containerRightSideLogin">
      <div className="loginForm">
        <p className="title">BIENVENIDO</p>
        <p className="titleInput">MAIL</p>
        <input placeholder="tumail@mail.com" type="email" />
        <p className="titleInput">CONTRASEÑA</p>
        <input placeholder="*****" type="password" />
        <span>Recuperar contraseña</span>

        <button>
          <Link to="/home">INICIAR SESIÓN </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
