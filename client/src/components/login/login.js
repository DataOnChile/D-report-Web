import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// Action
import { PostLogin } from "../../actions/login/loginAction";

const Login = () => {
  const [form] = useState({
    user: "mmunro@dataon.cl",
    pass: "123456",
  });
  const state = useSelector((state) => state.Login);

  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      PostLogin({
        provider: "kantoor",
        kantoor: { email: form.user, password: form.pass },
      })
    );
  };

  let auth = localStorage.getItem("auth");
  let ruta = "/home";
  auth = auth === "true";

  return auth ? (
    <Redirect to={ruta} />
  ) : (
    <div className="containerRightSideLogin">
      <div className="loginForm">
        <p className="title">BIENVENIDO</p>
        <p className="titleInput">MAIL</p>
        <input placeholder="tumail@mail.com" type="email" />
        <p className="titleInput">CONTRASEÑA</p>
        <input placeholder="*****" type="password" />
        <span>Recuperar contraseña</span>
        <button onClick={handleLogin}>
          {state.loading ? "CARGANDO..." : "INICIAR SESIÓN"}
        </button>
        {state.status === 204 && <p>Usuario o password incorrecto</p>}
      </div>
    </div>
  );
};

export default Login;
