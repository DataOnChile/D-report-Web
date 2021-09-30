import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import _ from "lodash";
// import { Link } from "react-router-dom";

// ACTION
import {
  GetListFinalizedAction,
  ResetGetListFinalizedAction,
} from "../../../actions/home/assigments/getListFinalizedAction";

const Finalized = () => {
  const dispatch = useDispatch();
  const getListFinalizedAssigment = useSelector(
    (state) => state.ListFinalizedAssigment
  );

  useEffect(() => {
    const FetchData = () => {
      dispatch(
        GetListFinalizedAction({
          nxpage: 15, //o.o
          reg_inicio: 1, //o.o
          reg_fin: 15, //o.o
          linea_id: 20,
          patron: "32",
          desde: "18-08-2020",
          hasta: "01-09-2020",
          sorteadores: [
            { campo_id: 21 }, //committed date
            { campo_id: 19 }, // Description of the installation
            { campo_id: 20 }, // Container size
          ],
        })
      );
    };
    FetchData();
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(ResetGetListFinalizedAction());
    };
  }, [dispatch]);

  console.log("getListFinalizedAssigmentDATA", getListFinalizedAssigment);

  return (
    <React.Fragment>
      <div className="topBarBottomSideDashboard">
        <div className="leftSideTopBarBottomSideDashboard">
          <p className="title">Asignaciones Finalizadas</p>
          <p className="subtitle">Listado de asignaciones finalizadas</p>
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

export default Finalized;
