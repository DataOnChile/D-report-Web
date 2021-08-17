import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import Main from "./container/main";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
