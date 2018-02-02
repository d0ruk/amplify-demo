import Amplify from "aws-amplify"
import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { injectGlobal } from "styled-components"
import { normalize, lighten, complement } from "polished"
// import { Provider, Client } from "urql"

import { createBreakpoints } from "~/util"
import aws_exports from "~/aws-exports"
import App from "~/App"

Amplify.configure(aws_exports);

// const client = new Client({
//   url: "https://api.github.com/graphql"
// });
const sizes = {
  xl: 1690, lg: 1280,
  md: 980, sm: 736, xs: 480
};
const brk = createBreakpoints(sizes);

injectGlobal`
  ${normalize()}
  @import url("https://cdnjs.cloudflare.com/ajax/libs/devicons/1.8.0/css/devicons.min.css");

  :root {
    --primary: rgb(23, 121, 186);
    --secondary: rgb(118, 118, 118);
    --success: rgb(58, 219, 118);
    --error: rgb(204, 75, 55);
    --warning: rgb(255, 174, 0);
    --primary-font_color: ${lighten(0.5, complement("rgb(23, 121, 186)"))};
    --secondary-font_color: ${lighten(0.5, complement("rgb(118, 118, 118)"))};
    --success-font_color: ${lighten(0.5, complement("rgb(58, 219, 118)"))};
    --error-font_color: ${lighten(0.5, complement("rgb(204, 75, 55)"))};
    --warning-font_color: ${lighten(0.5, complement("rgb(255, 174, 0)"))};
  }
  
  body {
    &:focus {
      margin: 0;
      padding: 0;
      outline: 0;
    }
  }

  html {
    font-size: 18px;
    text-shadow: 0 2px 0 rgba(0, 0, 0, .07);
    ${brk.lg`font-size: 17px;`}
    ${brk.md`font-size: 15px;`}
    ${brk.sm`font-size: 14px;`}
    ${brk.xs`font-size: 12px;`}
  }
`;

render(
  // <Provider client={client}>
  <Router>
    <App breakpoints={brk} />
  </Router>,
  // </Provider>,  
  document.getElementById("root")
);

if (module.hot) { module.hot.accept(); }
