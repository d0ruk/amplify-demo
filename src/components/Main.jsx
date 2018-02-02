import React from "react"
import styled from "styled-components"

import { mediaObjectShape } from "~/util"

const Component = styled.main`
  display: grid;
  border-radius: 5px;
  padding: 10px;
  margin: 1rem;
  ${p => p.media.lg`flex-direction: column-reverse;`}
`;

const Main = (props, { media }) => (
  <Component
    media={media}
    {...props}
  />
);

Main.displayName = "Main";
Main.contextTypes = {
  media: mediaObjectShape
}

export default Main;