import React from "react";
import Login from "../../components/login/login";
import cover from "../../assets/img/container-verde.png";
import logo from "../../assets/img/logos/logo_D-Report-mediano_negro.svg";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="containerLeftSideLogin">
        <div className="containerLogo">
          <img alt="logoDReport" className="logo" src={logo} />
        </div>
        <div className="containerCoverImg">
          <img className="coverImg" alt="cover" src={cover} />
        </div>
      </div>
      <Login  />
    </div>
  );
};

export default LoginPage;
