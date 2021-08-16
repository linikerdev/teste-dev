import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router/index";
import "./config/bootstrap";
import GlobalStyled from "./assets/globalStyled";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Routers />
      <GlobalStyled />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
