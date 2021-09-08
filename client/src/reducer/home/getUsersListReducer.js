const initialState = {
  data: {},
  loading: false,
  errorMsg: "",
  status: 0,
};
const GetUsersListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "RESET_USERS_LIST":
      return {
        ...state,
        data: [],
        loading: false,
        errorMsg: "",
      };
    case "GET_USERS_LIST_SUCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: action.status,
        errorMsg: "",
      };
    case "GET_USERS_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error getUserListReducer",
      };
    default:
      return state;
  }
};
export default GetUsersListReducer;
