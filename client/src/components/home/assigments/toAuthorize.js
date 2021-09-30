import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import _ from "lodash";

// ACTION
import {
  GetListToAuthorizeAction,
  ResetGetListToAuthorizeAction,
} from "../../../actions/home/assigments/getListToAuthorizeAction";

const ToAuthorize = () => {
  const dispatch = useDispatch();
  const getListToAuthorizeAssigments = useSelector(
    (state) => state.ListToAuthorizeAssigment
  );

  useEffect(() => {
    const FetchData = () => {
      dispatch(
        GetListToAuthorizeAction({
          nxpage: 15, //o.o
          reg_inicio: 1, //o.o
          reg_fin: 15, // o.o
          linea_id: 20,
          patron: "4455",
          desde: "01-01-2021",
          hasta: "01-01-2022",
          sorteadores: [
            { campo_id: 364 }, //	Cliente:
            { campo_id: 365 }, //	N° de orden:
            { campo_id: 366 }, //	Medidas del contenedor:
            { campo_id: 367 }, //	Descripción de la carga:
            { campo_id: 368 }, //	Lugar de la carga:
            { campo_id: 369 }, //	Fecha
          ],
        })
      );
    };
    FetchData();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(ResetGetListToAuthorizeAction());
    };
  }, [dispatch]);

  console.log("getListToAuthorizeAssigments", getListToAuthorizeAssigments);

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
