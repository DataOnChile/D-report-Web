const initialState = {
  data: {},
  loading: false,
  errorMsg: "",
  status: 0,
};
const GetListPendingAssigmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_PENDING_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: "",
      };
    case "RESET_GET_LIST_PENDING_ASSIGMENTS":
      return {
        ...state,
        data: [],
        loading: false,
        errorMsg: "",
      };
    case "GET_LIST_PENDING_SUCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        status: action.status,
        errorMsg: "",
      };
    case "GET_LIST_PENDING_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "Error GetListPendingAssigmentsReducer",
      };
    default:
      return state;
  }
};
export default GetListPendingAssigmentsReducer;
