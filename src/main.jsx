import React from "react";

import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./Pages/Page.dir.Portfolio/Portfolio";
import AboutExatasChat from "./Pages/Page.dir.ExatasChat/AboutExatasChat";
import CoinConversor from "./Pages/Page.dir.CoinConversor/CoinConversor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Portfolio />
        </Route>
        <Route path="/exataschat">
          <AboutExatasChat />
        </Route>
        <Route path="/coinconversor">
          <CoinConversor/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
