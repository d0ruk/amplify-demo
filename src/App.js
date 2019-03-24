import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import { NavBar, Main } from "components";
import { Home, About } from "pages";

const routes = [
  {
    name: "home",
    to: "/"
  },
  {
    name: "about",
    to: "/about"
  }
];

const App = () => (
  <Router>
    <NavBar routes={routes} />
    <Main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Main>
  </Router>
);

export default hot(App);
