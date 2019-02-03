import React, { Component, Fragment } from "react"
import { withAuthenticator } from "aws-amplify-react"
import { Route, Switch, Link } from "react-router-dom"

import { mediaObjectShape } from "~/util"
import Header from "~/components/Header"
import Main from "~/components/Main"
import Footer from "~/components/Footer"
import Home from "~/pages/Home"

class App extends Component {
  static propTypes = {
    breakpoints: mediaObjectShape
  }
  static childContextTypes = {
    media: mediaObjectShape
  }

  getChildContext() {
    return {
      media: this.props.breakpoints
    }
  }

  render() {
    return this.renderApp();
  }

  renderApp = () => (
    <Fragment>
      <Header>
        <Link to="/">
          <span className="devicons devicons-linux"></span>
        </Link>
      </Header>
      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Main>
      <Footer>
        <h3 style={{ textAlign: "right", width: "100%" }}>Here be footer</h3>
      </Footer>
    </Fragment>
  )
}

export default withAuthenticator(App);
