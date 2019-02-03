import "@babel/polyfill";
import Auth from "@aws-amplify/auth";
import Analytics from "@aws-amplify/analytics";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createBreakpoints } from "~/util";
import awsconfig from "~/aws-exports";
import App from "~/App";

Auth.configure(awsconfig);
Analytics.configure(awsconfig);

const sizes = {
  xl: 1690,
  lg: 1280,
  md: 980,
  sm: 736,
  xs: 480
};

render(
  <Router>
    <App breakpoints={createBreakpoints(sizes)} />
  </Router>,
  document.getElementById("root")
);

if (module.hot) module.hot.accept();
