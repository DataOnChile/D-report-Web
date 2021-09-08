import { combineReducers } from "redux";

import loginReducer from "./login/loginReducer";
import GetUsersListReducer from './home/getUsersListReducer'

const rootReducer = combineReducers({
  Login: loginReducer,
  UsersList: GetUsersListReducer,
});

export default rootReducer;