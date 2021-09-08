import axios from "axios";

export const GetUsersList = () => async (dispatch) => {
  dispatch({
    type: "GET_USERS_LIST_LOADING",
  });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );

    const { status } = response;
    let data = await response.data;

    dispatch({
      type: "GET_USERS_LIST_SUCESS",
      // payload: data.datos,
      payload: data,
      status,
    });
  } catch (err) {
    dispatch({
      type: "GET_USERS_LIST_FAIL",
    });
    console.log("Error getUserListAction", err);
  }
};
export const ResetUsersList = () => {
  return {
    type: "RESET_USERS_LIST",
  };
};

//       ${encodeURIComponent(JSON.stringify(obj))}
