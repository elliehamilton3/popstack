/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import Page from "./resume.page";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "Pages/Resume", component: Page };
export const Basic = () => (
  <Router>
    <Page />
  </Router>
);
