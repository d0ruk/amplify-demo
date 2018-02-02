import React, { Component, Fragment } from "react"
// import { Auth } from "aws-amplify"
import { Connect, query } from "urql"
import { parse, stringify } from "query-string"
import { Portal } from "react-portal"

import { Loader, Button } from "~/components"

const inspectQuery = `
  query {
    __schema {
      types {
        name
        kind
        description
        fields {
          name
        }
      }
    }
  }
`;

export default class Home extends Component {

  componentWillMount = async () => {
    const params = parse(window.location.search);

    if (params.code) {
      console.log("there is a code!");
    }
  }
  
  render() {
    return ["primary", "secondary", "error", "warning", "success"]
      .map(accent => [
        <Button
          key={accent}
          // disabled
          accent={accent}
        >
          {accent}
        </Button>,
        <Button
          key={accent + "-disabled"}
          disabled
          accent={accent}
        >
        disabled {accent}
        </Button>
      ].concat(["bold", "bolder", "lighter", "700"].map(weight => (
        <Button
          key={`${weight}_${accent}`}
          accent={accent}
          weight={weight} /* default weight is "normal" */
        >
          {weight} {accent}
        </Button>
      ))));
    // return (
    //   <Connect
    //     query={query(inspectQuery)}
    //     render={({ loaded, data, refetch }) => {
    //       console.dir(data);
          
    //       return (
    //         <div>
    //           {!loaded
    //             ? this.renderLoader()
    //             : "hello"}
    //         </div>
    //       );
    //     }}
    //   />
    // );
  }

  handleAuth = () => {
    const opts = {
      client_id: "700c0603924c7fa8fdd4",
      // redirect: "http://localhost:8080",
      // scope: "user public_repo repo repo_deployment repo:status read:repo_hook read:org read:public_key read:gpg_key"
    };
    const url = `https://github.com/login/oauth/authorize?${stringify(opts)}`;
    window.open(url);
  }

  renderLoader = () => (
    <Portal>
      <Loader />
    </Portal>
  )
}