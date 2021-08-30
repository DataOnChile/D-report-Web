import React from "react";
import { Link } from "react-router-dom";
const Pending = () => {
  return (
    <React.Fragment>
      <div className="topBarBottomSideDashboard">
        <div className="leftSideTopBarBottomSideDashboard">
          <p className="title">Asignaciones Pendientes</p>
          <p className="subtitle">Listado de asignaciones pendientes</p>
        </div>
        <div className="rightSideTopBarBottomSideDashboard">
          <Link to={"/home/dashboard/pending/new-assigment"}>
            <span class="material-icons-outlined">add</span>
            <p>Nueva Asignación</p>
          </Link>
        </div>
      </div>
      <div className="allAssigments">
        <div className="tableInformationAssigments">
          <p>Orden ID</p>
          <p>Descripción</p>
          <p>Cliente</p>
          <p>Agenda</p>
          <p>Vencimiento</p>
          <p>Dirección</p>
          <p>Asignado</p>
          <p>Container</p>
          <p>Producto</p>
          <p>Moderador</p>
          <p>Estatus</p>
          <p>Acción</p>
        </div>
        <div className="newAssignments">
          <div className="containerListAssigments">
            {/* Mapeo */}
            <div className="eachAssigment">
              <p>Orden ID</p>
              <p>Descripción</p>
              <p>Cliente</p>
              <p>Agenda</p>
              <p>Vencimiento</p>
              <p>Dirección</p>
              <p>Asignado</p>
              <p>Container</p>
              <p>Producto</p>
              <p>Moderador</p>
              <p>Estatus</p>
              <p>Acción</p>
            </div>
            <div className="eachAssigment">
              <p>Orden ID</p>
              <p>Descripción</p>
              <p>Cliente</p>
              <p>Agenda</p>
              <p>Vencimiento</p>
              <p>Dirección</p>
              <p>Asignado</p>
              <p>Container</p>
              <p>Producto</p>
              <p>Moderador</p>
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

export default Pending;
