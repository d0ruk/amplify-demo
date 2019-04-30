import "./index.scss";
import "typeface-zcool-xiaowei";
import React from "react";
import ReactDOM from "react-dom";
import Amplify from "@aws-amplify/core";
// import Auth from "@aws-amplify/auth";
// import Analytics from "@aws-amplify/analytics";
import { BrowserRouter } from "react-router-dom";

import awsexports from "./aws-exports";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalState from "~/state";

Amplify.configure(awsexports);

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
    </BrowserRouter>,
    document.getElementById("root")
  );
}
render();

serviceWorker.unregister();
if (module.hot) module.hot.accept(render);
