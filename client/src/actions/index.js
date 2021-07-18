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
      localStorage.setItem("token", data.token);
      callback();
    })
    .catch((error) => dispatch({ type: AUTH_ERROR, payload: "Email in use" }));
};

export const Signout = () => {
  localStorage.removeItem("token");
  return { type: AUTH_USER, payload: "" };
};

export const Signin = (formProps, callback) => async (dispatch) => {
  await axios
    .post("http://localhost:3090/signin", formProps)
    .then(({ data }) => {
      dispatch({
        type: AUTH_USER,
        payload: data.token,
      });
      localStorage.setItem("token", data.token);
      callback();
    })
    .catch((error) => dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" }));
};
