import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav footer__items">
        <img src="/images/logo.svg" alt="Logo" className="nav__logo" />
        <div>
          <ul className="nav-items">
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
      </nav>
    </footer>
  );
};

export default Footer;
