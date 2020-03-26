import React from "react";
import { NavLink } from "react-router-dom";

import "./header.less";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Covid-19 Tracker</h1>
      <nav className="nav">
        <NavLink className="navLink" activeClassName="active-nav" to="/" exact>
          Home
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/china"
          exact
        >
          China
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/portugal"
          exact
        >
          Portugal
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/italy"
          exact
        >
          Italy
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/spain"
          exact
        >
          Spain
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/germany"
          exact
        >
          Germany
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/usa"
          exact
        >
          USA
        </NavLink>
        <NavLink
          className="navLink"
          activeClassName="active-nav"
          to="/brazil"
          exact
        >
          Brazil
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
