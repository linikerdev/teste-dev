import React from "react";
import { Router } from "@reach/router";

// layout
import Layout from "../components/Layout/";
// views

import Home from "../views/home";

const Routers = () => (
  <>
    <Layout>
      <Router>
        <Home path="/" />
      </Router>
    </Layout>
  </>
);

export default Routers;
