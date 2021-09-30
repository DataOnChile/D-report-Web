const initialState = {
    data: {},
    loading: false,
    errorMsg: "",
    status: 0,
  };
  const GetListToAuthorizeAssigmentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_LIST_TO_AUTHORIZE_LOADING":
        return {
          ...state,
          loading: true,
          errorMsg: "",
        };
      case "RESET_GET_LIST_TO_AUTHORIZE_ASSIGMENTS":
        return {
          ...state,
          data: [],
          loading: false,
          errorMsg: "",
        };
      case "GET_LIST_TO_AUTHORIZE_SUCESS":
        return {
          ...state,
          loading: false,
          data: action.payload,
          status: action.status,
          errorMsg: "",
        };
      case "GET_LIST_TO_AUTHORIZE_FAIL":
        return {
          ...state,
          loading: false,
          errorMsg: "Error GetListToAuthorizeAssigmentsReducer",
        };
      default:
        return state;
    }
  };
  export default GetListToAuthorizeAssigmentsReducer;
  