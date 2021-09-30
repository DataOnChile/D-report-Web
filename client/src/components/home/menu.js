import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="containerMenu">
      <div className="insideContainerMenu">
        <div className="eachPartMenu">
          <div></div>
          <Link  to="/home">
            INICIO
          </Link>
        </div>
        <div className="eachPartMenu">
          <div></div>
          <Link  to="/home/dashboard/list-business-lines">
            LISTA DE LINEAS
          </Link>
        </div>
        <div className="eachPartMenu">
          <p>ASINACIONES</p>
        </div>
        <div className="eachPartMenu">
          <Link  to="/home/dashboard/pending">
            A. PENDIENTES
          </Link>
        </div>
        <div className="eachPartMenu">
          <Link  to="/home/dashboard/to-authorize">
            A. POR AUTORIZAR
          </Link>
        </div>
        <div className="eachPartMenu">
          <Link  to="/home/dashboard/finalized">
            A. FINALIZADAS
          </Link>
        </div>
        <div className="eachPartMenu">
          <Link  to="/home/dashboard/instalator">
            INSTALADOR
          </Link>
        </div>
        <div className="eachPartMenu">
          <Link  to="/home/dashboard/supervisor">
            SUPERVISOR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
