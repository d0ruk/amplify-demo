import "./index.css";
import "typeface-zcool-xiaowei";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();

serviceWorker.unregister();
if (module.hot) module.hot.accept(render);
