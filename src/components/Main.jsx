import React from "react"
import styled from "styled-components"

import { mediaObjectShape } from "~/util"

const Component = styled.main`
  background: rgba(0,0,255,0.3);
  display: flex;
  border-radius: 5px;
  padding: 10px;
  margin: 1rem;
  ${p => p.media.lg`background: red;`}
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