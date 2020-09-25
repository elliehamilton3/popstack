import * as React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { IndexView } from './index.view';
import { ResumeView } from './resume.view';

export const AppView: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={IndexView} />
      <Route path="/resume" component={ResumeView} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppView;
