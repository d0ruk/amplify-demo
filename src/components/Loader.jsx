import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,255,0,0.3);
  }
`;

const Component = styled.i`
  color: rgba(0,0,255,.5);
  font-size: 20rem;
`;

const Loader = props => (
  <Wrapper>
    <Component
      {...props}
      className="fas fa-cog fa-pulse"
    />
  </Wrapper>
);

Loader.displayName = "Loader";

export default Loader;
