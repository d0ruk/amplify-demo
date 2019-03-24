import styled from "styled-components";

export { default as NavBar } from "./NavBar";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

export const Li = styled.li`
  padding: 0.3rem;
`;

export const Main = styled.main`
  padding: 0.5rem;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`;

export const Span = styled.span``;
export const Nav = styled.nav``;
export const Div = styled.div``;
export const Section = styled.section``;

export const H1 = styled.h1`
  font-family: Zcool Xiaowei;
`;

export const H2 = styled.h2`
  font-family: Zcool Xiaowei;
`;

export const H3 = styled.h3`
  font-family: Zcool Xiaowei;
`;

export const H4 = styled.h4`
  font-family: Zcool Xiaowei;
`;

export const H5 = styled.h5`
  font-family: Zcool Xiaowei;
`;

export const H6 = styled.h6`
  font-family: Zcool Xiaowei;
`;
