const initialState = {
    data: {},
    loading: false,
    errorMsg: "",
    status: 0,
  };
  const GetListFinalizedAssigmentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_LIST_FINALIZED_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: "",
        };
      case "RESET_GET_LIST_FINALIZED_ASSIGMENTS":
        return {
          ...state,
          data: [],
          loading: false,
          errorMsg: "",
        };
      case "GET_LIST_FINALIZED_SUCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          status: action.status,
          errorMsg: "",
        };
      case "GET_LIST_FINALIZED_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "Error GetListFinalizedAssigmentsReducer",
        };
      default:
        return state;
    }
  };
  export default GetListFinalizedAssigmentsReducer;