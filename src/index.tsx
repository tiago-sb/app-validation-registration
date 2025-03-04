import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from "./global";
import Rotas from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
)

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Rotas />
  </React.StrictMode>
);
