import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Page.dir.Portfolio/Portfolio";
import AboutExatasChat from "./Pages/Page.dir.ExatasChat/AboutExatasChat";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename="/">
    <Switch>
      <Route exact path="/">
        <Portfolio/>
      </Route>
      <Route path="/exataschat">
        <AboutExatasChat/>
      </Route>
    </Switch>
  </Router>
);
