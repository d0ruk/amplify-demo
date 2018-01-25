import React, { Component, Fragment } from "react"
import { withAuthenticator } from "aws-amplify-react"
import { Portal } from "react-portal"

import { mediaObjectShape } from "./util"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Loader from "./components/Loader"

class App extends Component {
  static propTypes = {
    breakpoints: mediaObjectShape
  }
  static childContextTypes = {
    media: mediaObjectShape
  }

  state = {
    isLoading: true
  }

  getChildContext() {
    return {
      media: this.props.breakpoints
    }
  }

  render() {
    const { isLoading } = this.state;
    setTimeout(() => this.setState({ isLoading: false }), 2000)
    return isLoading ? this.renderLoader() : this.renderApp()
  }

  renderApp = () => (
    <Fragment>
      <Header>
        <i className="fab fa-aws" />
      </Header>
      <Main>
        <h1>Here be content</h1>
      </Main>
      <Footer>
        <h3>Here is the footer</h3>
      </Footer>
    </Fragment>
  )

  renderLoader = () => (
    <Portal>
      <Loader />
    </Portal>
  )
}

export default withAuthenticator(App);