import axios from "axios";

export const GetListPendingAction = (obj) => async (dispatch) => {
  dispatch({
    type: "GET_LIST_PENDING_LOADING",
  });
  try {
    const response = await axios.get(
      `/api/listPendingAssigments/${encodeURIComponent(JSON.stringify(obj))}`
    );

    const { status } = response;
    let data = await response.data;
    console.log("pendingDataAction", data);

    dispatch({
      type: "GET_LIST_PENDING_SUCESS",
      payload: data.datos,
      status,
    });
  } catch (err) {
    dispatch({
      type: "GET_LIST_PENDING_FAIL",
    });
    console.log("Error GetListPendingAction", err);
  }
};

export const ResetGetListPendingAction = () => {
  return {
    type: "RESET_GET_LIST_PENDING_ASSIGMENTS",
  };
};
