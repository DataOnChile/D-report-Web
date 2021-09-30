import axios from "axios";

export const GetListBusinessAction = (obj) => async (dispatch) => {
  dispatch({
    type: "GET_LIST_BUSINESS_LINES_LOADING",
  });
  try {
    const response = await axios.get(
      `/api/listBussinesLines/${encodeURIComponent(JSON.stringify(obj))}`
    );

    const { status } = response;
    let data = await response.data;

    dispatch({
      type: "GET_LIST_BUSINESS_LINES_SUCESS",
      payload: data.datos,
      status,
    });
  } catch (err) {
    dispatch({
      type: "GET_LIST_BUSINESS_LINES_FAIL",
    });
    console.log("Error GetListBusinessAction", err);
  }
};

export const ResetListBusinessAction = () => {
  return {
    type: "RESET_GET_LIST_BUSINESS_LINES",
  };
};
