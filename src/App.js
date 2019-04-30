import React, { Fragment, useContext } from "react";
import { Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { Authenticator } from "aws-amplify-react";

import { NavBar, Main } from "~/components";
import { Home, About } from "~/pages";
import { AuthContext } from "~/state";
import { debug } from "~/util";

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

const signUpConfig = {
  hiddenDefaults: "phone_number"
};

const App = () => {
  const { signedIn, setSignedIn } = useContext(AuthContext);

  return (
    <Authenticator
      signUpConfig={signUpConfig}
      onStateChange={s => {
        debug("auth state: %s", s);
        s === "signedIn" ? setSignedIn(true) : setSignedIn(false);
      }}
    >
      {signedIn && (
        <Fragment>
          <NavBar routes={routes} />
          <Main>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Main>
        </Fragment>
      )}
    </Authenticator>
  );
};

export default hot(App);
