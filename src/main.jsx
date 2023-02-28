import React from "react";

import ReactDOM from "react-dom/client";
import { HashRouter as BrowserRouter } from "react-router-dom";
import RoutesFile from "./Routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <RoutesFile />
  </BrowserRouter>
);
