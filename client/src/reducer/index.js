import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer";
import GetListBusinessLinesReducer from "./home/getListBusinessLinesReducer";
import GetListPendingAssigmentsReducer from "./home/assigments/listPendingReducer";
import GetListToAuthorizeAssigmentsReducer from "./home/assigments/listToAuthorizeReducer";
import GetListFinalizedAssigmentsReducer from "./home/assigments/listFinalizedReducer";



const rootReducer = combineReducers({
  Login: loginReducer,
  BusinessLines: GetListBusinessLinesReducer,
  ListPendingAssigment: GetListPendingAssigmentsReducer,
  ListToAuthorizeAssigment : GetListToAuthorizeAssigmentsReducer,
  ListFinalizedAssigment : GetListFinalizedAssigmentsReducer
});

export default rootReducer;
