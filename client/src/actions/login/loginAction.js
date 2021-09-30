import axios from "axios";

export const PostLogin = (obj) => async (dispatch) => {
  dispatch({
    type: "LOADING_LOGIN",
  });
  try {
    const response = await axios.post(`/api/login/`, obj);
    const { status } = response;

    let data = await response.data;
    console.log(data)

    dispatch({
      type: "SUCESS_LOGIN",
      payload: data,
      status,
    });
  } catch (err) {
    dispatch({
      type: "FAIL_LOGIN",
    });
    console.log("error action login", err);
  }
};

export const ResetLogin = () => {
  return {
    type: "RESET_LOGIN",
  };
};
