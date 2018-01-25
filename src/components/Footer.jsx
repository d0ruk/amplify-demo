import React from "react"
import styled from "styled-components"

import { mediaObjectShape } from "~/util"

const Component = styled.footer`
  display: flex;
  border-radius: 5px;
  padding: 5px;
  margin: 1rem;
  height:10vh;
  ${p => p.media.lg`background: blue;`}
`;

const Footer = (props, { media }) => (
  <Component
    media={media}
    {...props}
  />
);

Footer.displayName = "Footer";
Footer.contextTypes = {
  media: mediaObjectShape
};

export default Footer;