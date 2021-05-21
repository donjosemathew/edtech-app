import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.style.scss";
const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/images/logo.svg" alt="Logo" className="nav__logo" />
      <div>
        <ul className="nav-items ">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              HOME
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              COURSES
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              ABOUT
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-items-right">
        <ul className="nav-items">
          <li className="nav__item">LOGIN/SIGNUP</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
