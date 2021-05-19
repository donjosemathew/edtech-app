import React from "react";
import "./signup.style.scss";
import Fade from "react-reveal/Fade";

import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

function SignUpComponent() {
  return (
    <div className="signin signup">
      <div className="signin__col2">
        <Fade>
          <h2 className="signin__head2">SignUp</h2>
          <div className="signin__input">
            <TextField id="standard-basic" label="Name" />
          </div>
          <div className="signin__input">
            <TextField id="standard-basic" label="Email" />
          </div>
          <div className="signin__input">
            <TextField id="standard-basic" label="Password" />
          </div>
          <Link to="/">
            <button className="signin__btn">SIGN UP</button>
          </Link>
          <Link to="/signin" className="signin__subtext">
            <p className="signin__subtext">Already have an Account</p>
          </Link>
        </Fade>
      </div>
      <div className="signin__col1 signup__col1">
        <Fade>
          <Link to="/">
            <img src="/images/logo.svg" alt="Logo" className="signin__logo" />
          </Link>
        </Fade>
        <Fade right>
          <h2 className="signin__head">
            Start Your Journey <span>Welcome to SkillBook </span>
          </h2>
        </Fade>
      </div>
    </div>
  );
}

export default SignUpComponent;
