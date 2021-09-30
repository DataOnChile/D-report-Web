import axios from "axios";

export const GetListFinalizedAction = (obj) => async (dispatch) => {
  dispatch({
    type: "GET_LIST_FINALIZED_LOADING",
  });
  try {
    const response = await axios.get(
      `/api/listFinalizedAssigments/${encodeURIComponent(JSON.stringify(obj))}`
    );

    const { status } = response;
    let data = await response.data;
    console.log("FINALIZEDDataAction", data);

    dispatch({
      type: "GET_LIST_FINALIZED_SUCESS",
      payload: data.datos,
      status,
    });
  } catch (err) {
    dispatch({
      type: "GET_LIST_FINALIZED_FAIL",
    });
    console.log("Error GetListFinalizedAction", err);
  }
};

export const ResetGetListFinalizedAction = () => {
  return {
    type: "RESET_GET_LIST_FINALIZED_ASSIGMENTS",
  };
};