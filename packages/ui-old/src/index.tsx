import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { historyInit } from "./service/historyInit.service";
import AppView from "./view/app.view";
import { AuthController } from './component/controllers/auth.controller';

const app = {
  init: () => {
    const browserHistory = historyInit();

    ReactDOM.render(

          <AuthController
      >      <Router history={browserHistory}>
        <AppView />
        </Router>
        </AuthController>

      ,
      document.getElementById("appRoot")
    );
  },
};

app.init();
