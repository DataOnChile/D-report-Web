import React from "react";

const TemplateForm = () => {
  return (
    <div className="containerForm">
      <div className="topSideForm">
        <span class="material-icons-outlined">chevron_left</span>
        <p className="title">Crear asignación</p>
        <div></div>
      </div>
      <div className="bottomSideForm">
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
        <div className="eachQuestionForm">
          <p className="questForm">Nombre</p>
          <input type="text" className="inputQuestForm" />
        </div>
      </div>
      <button className='btnForm'>Agregar</button>
    </div>
  );
};

export default TemplateForm;
