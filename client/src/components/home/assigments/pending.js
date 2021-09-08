import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

// ACTION
import {
  GetUsersList,
  ResetUsersList,
} from "../../../actions/home/getUsersListAction";

const Pending = () => {
  const dispatch = useDispatch();
  const getListUsers = useSelector((state) => state.UsersList);

  useEffect(() => {
    const FetchData = () => {
      dispatch(GetUsersList({}));
    };
    FetchData();
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(ResetUsersList());
    };
  }, [dispatch]);

  console.log(getListUsers.data);

  const showUserList = () => {
    if (getListUsers.loading) {
      return <p>Cargando</p>;
    } else if (!_.isEmpty(getListUsers.data)) {
      return getListUsers.data.map((item) => {
        return (
          <div className="eachAssigment" key={item.id}>
            <p>{item.id}</p>
            <p>{item.username}</p>
            <p>{item.name}</p>
            <p>Agenda</p>
            <p>Vencimiento</p>
            <p>{item.address.street}</p>
            <p>Asignado</p>
            <p>Container</p>
            <p>Producto</p>
            <p>Moderador</p>
            <p>Estatus</p>
            <p>Acción</p>
          </div>
        );
      });
    } else if (getListUsers.errorMsg !== "") {
      return <p>me lo pitie</p>;
    }
  };

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
          <div className="containerListAssigments">{showUserList()}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Pending;
