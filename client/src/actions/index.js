import { AUTH_ERROR, AUTH_USER } from "./types";
import axios from "axios";

export const Signup = (formProps, callback) => async (dispatch) => {
  await axios
    .post("http://localhost:3090/signup", formProps)
    .then(({ data }) => {
      dispatch({
        type: AUTH_USER,
        payload: data.token,
      });
      callback();
    })
    .catch((error) => dispatch({ type: AUTH_ERROR, payload: "Email in use" }));
};
