import React from "react";
import { Route } from "react-router-dom";
// COMPONENTS
import Init from "../../components/home/init";
import Menu from "../../components/home/menu";
import TopBar from "../../components/home/topBar";
import InformationBar from "../../components/home/informationBar";
import Pending from "../../components/home/assigments/pending";
import ToAuthorize from "../../components/home/assigments/toAuthorize";
import Finalized from "../../components/home/assigments/finalized";
import Instalator from "../../components/home/instalator";
import Supervisor from "../../components/home/supervisor";
// COMPONENTS FORMS
import FormNewAssigments from "../../components/home/forms/formNewAssigment";
import FormNewInstalator from "../../components/home/forms/formNewInstalator";
import FormNewSupervisor from "../../components/home/forms/formNewSupervisor";
const HomePage = () => {
  return (
    <div className="containerHomePage">
      <Menu />
      <div className="containerTopBarDashboard">
        <TopBar />
        <div className="containerDashBoard">
          <InformationBar />
          <div className="bottomSideDashboard">
            <Route exact path={"/home"} component={Init} />
            <Route exact path={"/home/dashboard/pending"} component={Pending} />
            <Route
              exact
              path={"/home/dashboard/to-authorize"}
              component={ToAuthorize}
            />
            <Route
              exact
              path={"/home/dashboard/finalized"}
              component={Finalized}
            />
            <Route
              exact
              path={"/home/dashboard/instalator"}
              component={Instalator}
            />
            <Route
              exact
              path={"/home/dashboard/supervisor"}
              component={Supervisor}
            />
            <Route
              exact
              path={"/home/dashboard/pending/new-assigment"}
              component={FormNewAssigments}
            />
            <Route
              exact
              path={"/home/dashboard/instalator/new-instalator"}
              component={FormNewInstalator}
            />
            <Route
              exact
              path={"/home/dashboard/supervisor/new-supervisor"}
              component={FormNewSupervisor}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
