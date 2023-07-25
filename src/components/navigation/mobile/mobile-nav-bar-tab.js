import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarTab = ({ path, label, handleClick }) => {
  return (
    <NavLink
      to={path}
      onClick={handleClick}
      exact
      className="mobile-nav-bar__tab"
      activeClassName="mobile-nav-bar__tab--active"
    >
      {label}
    </NavLink>
  );
};
