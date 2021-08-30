import React from "react";
import { Link } from "react-router-dom";

const Supervisor = () => {
  return (
    <React.Fragment>
      <div className="topBarBottomSideDashboard">
        <div className="leftSideTopBarBottomSideDashboard">
          <p className="title">Supervisor</p>
          <p className="subtitle">Listado de supervisores</p>
        </div>
        <div className="rightSideTopBarBottomSideDashboard">
          <Link to={"/home/dashboard/supervisor/new-supervisor"}>
            <span class="material-icons-outlined">add</span>
            <p>Nuevo supervisor</p>
          </Link>
        </div>
      </div>
      <div className="allAssigments">
        <div className="tableInformationAssigments">
          <p>Nombre</p>
          <p>Email</p>
          <p>Teléfono</p>
          <p>Calle y número</p>
          <p>Lugar</p>
          <p>Estatus</p>
          <p>Acción</p>
        </div>
        <div className="newAssignments">
          <div className="containerListAssigments">
            {/* Mapeo */}
            <div className="eachAssigment">
              <p>Nombre</p>
              <p>Email</p>
              <p>Teléfono</p>
              <p>Calle y número</p>
              <p>Lugar</p>
              <p>Estatus</p>
              <p>Acción</p>
            </div>
            <div className="eachAssigment">
              <p>Nombre</p>
              <p>Email</p>
              <p>Teléfono</p>
              <p>Calle y número</p>
              <p>Lugar</p>
              <p>Estatus</p>
              <p>Acción</p>
            </div>
            {/* FIN MAPEO */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Supervisor;
