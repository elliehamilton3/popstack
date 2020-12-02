/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import LandingPage from "./landing.page";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "Pages/Landing Page", component: LandingPage };
export const Basic = () => (
  <Router>
    <LandingPage />
  </Router>
);
