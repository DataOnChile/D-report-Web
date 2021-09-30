import axios from "axios";

export const GetListToAuthorizeAction = (obj) => async (dispatch) => {
  dispatch({
    type: "GET_LIST_TO_AUTHORIZE_LOADING",
  });
  try {
    const response = await axios.get(
      `/api/listToAuthorize/${encodeURIComponent(JSON.stringify(obj))}`
    );

    const { status } = response;
    let data = await response.data;
    console.log("ToAuthorizeDataAction", data.datos);

    dispatch({
      type: "GET_LIST_TO_AUTHORIZE_SUCESS",
      payload: data.datos,
      status,
    });
  } catch (err) {
    dispatch({
      type: "GET_LIST_TO_AUTHORIZE_FAIL",
    });
    console.log("Error GetListToAuthorizeAction", err);
  }
};

export const ResetGetListToAuthorizeAction = () => {
  return {
    type: "RESET_GET_LIST_TO_AUTHORIZE_ASSIGMENTS",
  };
};