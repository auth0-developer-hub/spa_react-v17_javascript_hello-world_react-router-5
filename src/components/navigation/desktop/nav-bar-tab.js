import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarTab = ({ path, label }) => {
  return (
    <NavLink
      to={path}
      exact
      className="nav-bar__tab"
      activeClassName="nav-bar__tab--active"
    >
      {label}
    </NavLink>
  );
};
