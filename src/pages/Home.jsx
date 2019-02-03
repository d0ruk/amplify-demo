import React, { Component, Fragment } from "react";
import { Portal } from "react-portal";

import { Loader, Button } from "~/components";

export default class Home extends Component {
  render() {
    return ["primary", "secondary", "error", "warning", "success"].map(accent =>
      [
        <Button
          key={accent}
          // disabled
          accent={accent}
        >
          {accent}
        </Button>,
        <Button key={accent + "-disabled"} disabled accent={accent}>
          disabled {accent}
        </Button>
      ].concat(
        ["bold", "bolder", "lighter", "700"].map(weight => (
          <Button
            key={`${weight}_${accent}`}
            accent={accent}
            weight={weight} /* default weight is "normal" */
          >
            {weight} {accent}
          </Button>
        ))
      )
    );
  }

  renderLoader = () => (
    <Portal>
      <Loader />
    </Portal>
  );
}
