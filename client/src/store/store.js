import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/index";

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(thunk)
);

export default store;
