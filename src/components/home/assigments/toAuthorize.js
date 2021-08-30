import React from "react";

const ToAuthorize = () => {
  return (
    <React.Fragment>
      <div className="topBarBottomSideDashboard">
        <div className="leftSideTopBarBottomSideDashboard">
          <p className="title">Asignaciones por autorizar</p>
          <p className="subtitle">Listado de asignaciones por autorizar</p>
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

export default ToAuthorize;
