import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "reducers";
// import async from "middlewares/async";
import thunk from 'redux-thunk';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );

  return <Provider store={store}>{children}</Provider>;
};
