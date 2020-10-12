import "reflect-metadata";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";
import { historyInit } from "./service/historyInit.service";
import AppView from "./view/app.view";
import { Auth0Provider } from "@auth0/auth0-react";

const app = {
  init: () => {
    const browserHistory = historyInit();

    ReactDOM.render(
      <Auth0Provider
        domain="popstack.eu.auth0.com"
        clientId="xchtaTjCz0VG7tNXmPc9Psvo805kfLQB"
        redirectUri={window.location.origin}
      >
      <Router history={browserHistory}>
        <AppView />
      </Router>
      </Auth0Provider>,
      document.getElementById("appRoot")
    );
  },
};

app.init();
