import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./store/store";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import { Provider } from "react-redux";
import Feature from "./components/Feature";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
      </App>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
