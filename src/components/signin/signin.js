import React from "react";
import "./signin.style.scss";
import Fade from "react-reveal/Fade";

import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function SigninComponent() {
  return (
    <div className="signin">
      <div className="signin__col1">
        <Fade>
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" className="signin__logo" />
          </Link>
        </Fade>
        <Fade left>
          <h2 className="signin__head">
            Let's Sign you In <span>Welcome back</span>
          </h2>
        </Fade>
      </div>
      <div className="signin__col2">
        <Fade>
          <h2 className="signin__head2">SignIn</h2>

          <div className="signin__input">
            <TextField id="standard-basic" label="Email" />
          </div>
          <div className="signin__input">
            <TextField id="standard-basic" label="Password" />
          </div>
          <Link to="/">
            <button className="signin__btn">SIGN IN</button>
          </Link>
          <Link to="/signup" className="signin__subtext">
            <p className="signin__subtext">Create a new Account</p>
          </Link>
        </Fade>
      </div>
    </div>
  );
}

export default SigninComponent;
