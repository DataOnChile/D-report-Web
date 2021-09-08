import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "./assets/styles/index.scss";
import Main from "./container/main";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Main />
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
