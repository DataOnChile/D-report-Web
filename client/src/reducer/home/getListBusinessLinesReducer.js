const initialState = {
  data: {},
  loading: false,
  errorMsg: "",
  status: 0,
};
const GetListBusinessLinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_BUSINESS_LINES_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "RESET_GET_LIST_BUSINESS_LINES":
      return {
        ...state,
        data: [],
        loading: false,
        errorMsg: "",
      };
    case "GET_LIST_BUSINESS_LINES_SUCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: action.status,
        errorMsg: "",
      };
    case "GET_LIST_BUSINESS_LINES_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error GetUsersListReducer",
      };
    default:
      return state;
  }
};
export default GetListBusinessLinesReducer;
