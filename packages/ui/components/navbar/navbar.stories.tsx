/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Navbar from "./navbar.component";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "Navbar", component: Navbar };
export const Basic = () => (
  <Router>
    <Navbar />
  </Router>
);
