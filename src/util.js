import { shape, func } from "prop-types"
import { css } from "styled-components"

// https://www.styled-components.com/docs/advanced#media-templates
export function createBreakpoints(sizes) {
  return Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  
    return acc
  }, {});
}

export const mediaObjectShape = shape({
  xl: func.isRequired,
  lg: func.isRequired,
  md: func.isRequired,
  sm: func.isRequired,
  xs: func.isRequired
});