import React from "react";
import logo from "../../assets/img/logos/logo_D-Report-blanco_pequeno.svg";
const TopBar = () => {
  return (
    <div className="containerTopBar">
      <div className="eachContainerTopBar">
        <span class="material-icons">menu</span>
        <div className="containerLogoDReport">
          <img className="logoDReport" src={logo} alt="logo" />
        </div>
      </div>
      <div className="eachContainerTopBar">
        <span class="material-icons">notifications</span>
        <span class="material-icons-round profile">account_circle</span>
      </div>
    </div>
  );
};

export default TopBar;
