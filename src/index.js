import React from "react";
import ReactDOM from "react-dom";
import Routers from "./router/index";
import "./config/bootstrap";
import GlobalStyled from "./assets/globalStyled";
import { ToastContainer } from "react-toastify";

document.title = "Star Wars";

ReactDOM.render(
  <React.StrictMode>
    <>
      <Routers />
      <GlobalStyled />
      <ToastContainer />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
