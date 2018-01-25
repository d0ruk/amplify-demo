import Amplify from "aws-amplify"
import React from "react"
import { render } from "react-dom"
import { injectGlobal } from "styled-components"

import { createBreakpoints } from "~/util"
import aws_exports from "~/aws-exports"
import App from "~/App"

Amplify.configure(aws_exports);

injectGlobal`
  @import url("https://fonts.googleapis.com/css?family=Supermercado+One");
  @import url("https://use.fontawesome.com/releases/v5.0.4/css/all.css");

  body {
    margin: 0;
    padding: 0;
  }
`;
const sizes = {
  xl: 1690,
  lg: 1280,
  md: 980,
  sm: 736,
  xs: 480
};
const breakpoints = createBreakpoints(sizes);

render(<App
  breakpoints={breakpoints}
/>,
document.getElementById("root"));

if (module.hot) { module.hot.accept(); }
