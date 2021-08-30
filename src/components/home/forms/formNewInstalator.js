import React from "react";

const FormNewInstalator = () => {
  return (
    <div className="containerForm">
      <div className="topSideForm">
        <span class="material-icons-outlined">chevron_left</span>
        <p className="title">Crear instalador</p>
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
        <h3>Bodega</h3>
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Región</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Comuna</p>
          <select className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Calle y número</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Ciudad</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Lugar de la bodega</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Código postal</p>
          <input type="text" className="inputQuestForm" />
        </div>
      </div>
      <button className="btnForm">Agregar</button>
    </div>
  );
};

export default FormNewInstalator;
