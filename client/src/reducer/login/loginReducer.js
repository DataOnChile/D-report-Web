const initialState = {
    data: false,
    loading: false,
    status: 0,
    erroMsg: "",
  };
  
  export default function loginReducer(state = initialState, action) {
    switch (action.type) {
      case "RESET_LOGIN":
        localStorage.clear();
        return {
          ...state,
          data: false,
          loading: false,
          status: 0,
        };
      case "LOADING_LOGIN":
        return {
          ...state,
          loading: true,
        };
      case "SUCESS_LOGIN":
        const auth = action.status === 200 ? true : false;
        if (auth) {
          localStorage.setItem("auth", auth);
          localStorage.setItem("email", action.payload.usuario.email);
        }
        return {
          ...state,
          data: auth,
          loading: false,
          status: action.status,
        };
      case "FAIL_LOGIN":
        return {
          ...state,
          data: true,
          loading: false,
          status: 501,
        };
      default:
        return state;
    }
  }