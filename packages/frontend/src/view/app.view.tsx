import * as React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import { IndexView } from './index.view';
import { Page2View } from './page2.view';

export const AppView: React.FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={IndexView} />
      <Route path="/page2" component={Page2View} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default AppView;
