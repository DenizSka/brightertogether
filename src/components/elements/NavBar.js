import React from "react";
import { NavLink } from "react-router-dom";

import "./css/NavBar.css";

export const NavBar = () => {
  return (
    <div className= "nav-wrapper">
    <nav className="navbar" aria-label="main navigation">
      <NavLink to="/" exact className="nav-item" activeClassName="active">
        HOME
      </NavLink>
      <NavLink to="/about" className="nav-item" activeClassName="active">
        ABOUT US
      </NavLink>
      <NavLink to="/whatwedo" className="nav-item" activeClassName="active">
        WHAT WE DO?
      </NavLink>
    </nav>
    </div>
  );
};
