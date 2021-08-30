import React from "react";

const FormNewSupervisor = () => {
  return (
    <div className="containerForm">
      <div className="topSideForm">
        <span class="material-icons-outlined">chevron_left</span>
        <p className="title">Crear supervisor</p>
        <div></div>
      </div>
      <div className="bottomSideForm">
        <div className="eachQuestionForm">
          <p className="questForm">Usuario</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Contraseña</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Apellido</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">UID</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Email</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Teléfono</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Idiomas</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Administrador</p>
          <select className="inputQuestForm">
            <option>Si</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <button className="btnForm">Agregar</button>
    </div>
  );
};

export default FormNewSupervisor;
