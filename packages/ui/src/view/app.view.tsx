import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AnimationView from "./animation.view";
import DashboardView from "./dashboard.view";
import IndexView from "./index.view";
import ResumeView from "./resume.view";
import AuthCallbackPage from "../component/pages/auth/callback.page";
import ProtectedPage from "../component/controllers/protectedPage.controller";

const AppView: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={IndexView} />
      <Route path="/resume" component={ResumeView} />
      <Route path="/animation" component={AnimationView} />
      <Route path="/dashboard" exact component={ProtectedPage(DashboardView)} />
      <Route path="/auth/callback" exact component={AuthCallbackPage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppView;
