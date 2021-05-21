import React from "react";

import { Link } from "react-scroll";
import "./footer.style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav footer__items">
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
      </nav>
    </footer>
  );
};

export default Footer;
