import React from "react"
import styled from "styled-components"

import { mediaObjectShape } from "~/util"

const Component = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  height: 10vh;
  font-family: "Supermercado One", cursive;
  font-size: 5rem;
  ${p => p.media.lg`background: mediumseagreen;`}
`;

const Header = (props, { media }) => (
  <Component
    media={media}
    {...props}
  />
);

Header.displayName = "Header";
Header.contextTypes = {
  media: mediaObjectShape
};

export default Header;