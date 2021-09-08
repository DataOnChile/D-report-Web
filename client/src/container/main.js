import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./login/loginPage";
import HomePage from "./home/homePage";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
