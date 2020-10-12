import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AnimationView from "./animation.view";
import DashboardView from "./dashboard.view";
import IndexView from "./index.view";
import ResumeView from "./resume.view";

const AppView: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={IndexView} />
      <Route path="/resume" component={ResumeView} />
      <Route path="/animation" component={AnimationView} />
      <Route path="/dashboard" component={DashboardView} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppView;
