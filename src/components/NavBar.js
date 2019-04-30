import React from "react";
import { Link } from "react-router-dom";

import { Nav, Ul, Li } from "~/components";

const NavBar = ({ routes = [] }) => (
  <Nav>
    <Ul row>
      {routes.map(({ name, to }) => (
        <Li key={name}>
          <Link to={to || `/${name}`}>{name}</Link>
        </Li>
      ))}
    </Ul>
  </Nav>
);

export default NavBar;
