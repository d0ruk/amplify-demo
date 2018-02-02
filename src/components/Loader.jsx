import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  background: white;
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
    position: fixed;
    background: rgba(0,255,0,0.3);
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  svg path, svg rect {
    fill: #00a1f1;
  }
`;

// https://codepen.io/aurer/pen/jEGbA
const Loader = props => (
  <Wrapper>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/200a1f1/svg" 
      x="0px"
      y="0px"
      width="10rem"
      height="10rem"
      viewBox="0 0 24 30"
      {...props}      
    >
      <rect x="0" y="0" width="4" height="10">
        <animateTransform attributeType="xml"
          attributeName="transform" type="translate"
          values="0 0; 0 20; 0 0"
          begin="0" dur="1.1s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="0" width="4" height="10">
        <animateTransform attributeType="xml"
          attributeName="transform" type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.2s" dur="1.1s" repeatCount="indefinite" />
      </rect>
      <rect x="20" y="0" width="4" height="10">
        <animateTransform attributeType="xml"
          attributeName="transform" type="translate"
          values="0 0; 0 20; 0 0"
          begin="0.4s" dur="1.1s" repeatCount="indefinite" />
      </rect>
    </svg>
  </Wrapper>
);

Loader.displayName = "Loader";

export default Loader;
