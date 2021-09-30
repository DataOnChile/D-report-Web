import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import _ from "lodash";
import { Link } from "react-router-dom";

// ACTION
import {
  GetListPendingAction,
  ResetGetListPendingAction,
} from "../../../actions/home/assigments/getListPendingAction";

const Pending = () => {
  const dispatch = useDispatch();
  const getListPendingAssigment = useSelector(
    (state) => state.ListPendingAssigment
  );

  useEffect(() => {
    const FetchData = () => {
      dispatch(
        GetListPendingAction({
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
      dispatch(ResetGetListPendingAction());
    };
  }, [dispatch]);

  console.log("getListPendingDATA", getListPendingAssigment);

  // const showUserList = () => {
  //   if (getListUsers.loading) {
  //     return <p>Cargando</p>;
  //   } else if (!_.isEmpty(getListUsers.data)) {
  //     return getListUsers.data.map((item) => {
  //       return (
  //         <div className="eachAssigment" key={item.id}>
  //           <p>{item.id}</p>
  //           <p>{item.username}</p>
  //           <p>{item.name}</p>
  //           <p>Agenda</p>
  //           <p>Vencimiento</p>
  //           <p>{item.address.street}</p>
  //           <p>Asignado</p>
  //           <p>Container</p>
  //           <p>Producto</p>
  //           <p>Moderador</p>
  //           <p>Estatus</p>
  //           <p>Acción</p>
  //         </div>
  //       );
  //     });
  //   } else if (getListUsers.errorMsg !== "") {
  //     return <p>me lo pitie</p>;
  //   }
  // };

  return (
    <React.Fragment>
      <div className="topBarBottomSideDashboard">
        <div className="leftSideTopBarBottomSideDashboard">
          <p className="title">Asignaciones Pendientes</p>
          <p className="subtitle">Listado de asignaciones pendientes</p>
        </div>
        <div className="rightSideTopBarBottomSideDashboard">
          <Link to={"/home/dashboard/pending/new-assigment"}>
            <span className="material-icons-outlined">add</span>
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
          {/* <div className="containerListAssigments">{showUserList()}</div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pending;
