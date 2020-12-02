/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import ResumePage from "./resume.page";
import { BrowserRouter as Router } from "react-router-dom";

export default { title: "Pages/Resume", component: ResumePage };
export const Basic = () => (
  <Router>
    <ResumePage />
  </Router>
);
