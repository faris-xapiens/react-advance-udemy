import { AUTH_ERROR, AUTH_USER } from "../actions/types";

const initialState = {
  authenticated: "",
  errorMessage: "",
};

export default (state = initialState, { type, payload }) => {
  // const { type, payload } = action
  switch (type) {
    case AUTH_USER:
      return { ...state, authenticated: payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: payload };
    default:
      return state;
  }
};
