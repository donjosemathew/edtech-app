import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.style.scss";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="nav">
      <img src="/images/logo.svg" alt="Logo" className="nav__logo" />
      <div>
        <ul className="nav-items ">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              HOME
            </Link>
          </li>
          <li className="nav__item">
            <Link to="course" className="nav__link">
              COURSES
            </Link>
          </li>
          <li className="nav__item">
            <Link to="about" className="nav__link">
              ABOUT
            </Link>
          </li>
          <li className="nav__item">
            <Link to="contact" className="nav__link">
              CONTACTUS
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-items-right">
        <ul className="nav-items">
          <li className="nav__item nav__link">
            <NavLink to="/signin" className="nav__link">
              SIGNIN/SIGNUP
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
