import React from "react";

const FormNewAssigments = () => {
  return (
    <div className="containerForm">
      <div className="topSideForm">
        <span class="material-icons-outlined">chevron_left</span>
        <p className="title">Crear asignación</p>
        <div></div>
      </div>
      <div className="bottomSideForm">
        <div className="eachQuestionForm">
          <p className="questForm">Cliente</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Número de guía o número de factura</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Container</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Dirección</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Fecha inicio</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Fecha termino</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Instalador</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Descripción de instalación</p>
          <input type="text" className="inputQuestForm" />
        </div>
      </div>
      <button className="btnForm">Agregar</button>
    </div>
  );
};

export default FormNewAssigments;
