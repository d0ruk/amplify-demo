import React from "react"
import styled from "styled-components"
import { modularScale } from "polished"

import { string, bool } from "prop-types"

const Component = styled.button`
  text-decoration: none;
  display: inline-block;
  border-radius: 7px;
  color: ${({ accent="primary" }) => `var(--${accent}-font_color)`};
  cursor: pointer;
  font-size: ${modularScale(1)};
  font-weight: ${({ weight="normal" }) => `${weight}`};
  padding: .3rem 1rem;
  margin: .3rem;
  line-height: 2rem;
  height: auto;
  background: ${({ accent="primary" }) => `var(--${accent})`};

  &:disabled {
    opacity: .5;
    color: rgba(0,0,0,.5);
  }

  &:hover {
    color: ${({ accent="primary" }) => `var(--${accent})`};
    background: white;
  }
`;

const Button = props => (
  <Component
    type={props.htmlType || "button"}
    disabled={!!props.disabled}
    {...props}
  />
);
Button.displayName = "Button";
Button.propTypes = {
  htmlType: string,
  disabled: bool
};

export default Button;