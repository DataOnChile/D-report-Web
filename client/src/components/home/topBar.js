import React from "react";
import logo from "../../assets/img/logos/logo_D-Report-blanco_pequeno.svg";
const TopBar = ({ logOut }) => {
  return (
    <div className="containerTopBar">
      <div className="eachContainerTopBar">
        <span className="material-icons">menu</span>
        <div className="containerLogoDReport">
          <img className="logoDReport" src={logo} alt="logo" />
        </div>
      </div>
      <div className="eachContainerTopBar">
        <span className="material-icons">notifications</span>
        <span className="material-icons-round profile" onClick={logOut}>
          account_circle
        </span>
      </div>
    </div>
  );
};

export default TopBar;
