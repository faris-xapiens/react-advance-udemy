import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./index.css";
import App from "components/App";
import Root from "Root";

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Root>,
  document.getElementById("root")
);
