import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
import ListBusinessLines from "../../components/home/listBusinessLines";

// COMPONENTS FORMS
import FormNewAssigments from "../../components/home/forms/formNewAssigment";
import FormNewInstalator from "../../components/home/forms/formNewInstalator";
import FormNewSupervisor from "../../components/home/forms/formNewSupervisor";


// ACTION
import { ResetLogin } from "../../actions/login/loginAction";


const HomePage = ({ history }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    let auth = localStorage.getItem("auth");
    auth = auth === "true";
    if (!auth) {
      history.push("/");
      dispatch(ResetLogin());
    }
  });

  const logOut = () => {
    dispatch(ResetLogin());
    history.push("/");
  };

  return (
    <div className="containerHomePage">
      <Menu />
      <div className="containerTopBarDashboard">
        <TopBar logOut={logOut} />
        <div className="containerDashBoard">
          <InformationBar />
          <div className="bottomSideDashboard">
            <Route exact path={`/home`} component={Init} />
            <Route exact path={`/home/dashboard/pending`} component={Pending} />
            <Route
              exact
              path={`/home/dashboard/to-authorize`}
              component={ToAuthorize}
            />
            <Route
              exact
              path={`/home/dashboard/finalized`}
              component={Finalized}
            />
            <Route
              exact
              path={`/home/dashboard/instalator`}
              component={Instalator}
            />
            <Route
              exact
              path={`/home/dashboard/supervisor`}
              component={Supervisor}
            />
            <Route
              exact
              path={`/home/dashboard/pending/new-assigment`}
              component={FormNewAssigments}
            />
            <Route
              exact
              path={`/home/dashboard/instalator/new-instalator`}
              component={FormNewInstalator}
            />
            <Route
              exact
              path={`/home/dashboard/supervisor/new-supervisor`}
              component={FormNewSupervisor}
            />
            <Route
              exact
              path={`/home/dashboard/list-business-lines`}
              render={() => <ListBusinessLines />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
