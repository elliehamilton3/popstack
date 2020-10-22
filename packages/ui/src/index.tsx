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

      <Router history={browserHistory}>
          <AuthController
      >
        <AppView />
        </AuthController>
      </Router>
      ,
      document.getElementById("appRoot")
    );
  },
};

app.init();
