import React from "react";

const InformationBar = () => {
  return (
    <div className="topSideDashboard">
      <div className="eachContainerTopSide">
        <p>
          Hola, <strong>Paupi</strong>
        </p>
      </div>
      <div className="eachContainerTopSide">
        <span className="material-icons place">place</span>
        <p>Valparaiso</p>
      </div>
      <div className="line"></div>
      <div className="eachContainerTopSide">
        <span className="material-icons-outlined calendar">calendar_today</span>
        <p>19 junio, 2021</p>
      </div>
    </div>
  );
};

export default InformationBar;
