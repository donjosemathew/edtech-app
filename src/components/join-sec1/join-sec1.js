import React from "react";
import "./join-sec1.style.scss";
import Fade from "react-reveal/Fade";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Joinsec1 = () => {
  return (
    <div className="joinsec">
      <Fade right>
        <h3>
          Learn Any Time,<span>Any Where</span>
        </h3>
      </Fade>
      <Link to="/signin" style={{ textDecoration: "none" }}>
        <div className="joinbtn">
          Join As Student
          <BsArrowRightShort size="2em" className="icon" />
        </div>
      </Link>
      <Fade>
        <img
          src="/images/joinsec-1.png"
          alt="Women holding pen"
          className="img-women"
        />
      </Fade>
      <div className="circle"></div>
    </div>
  );
};

export default Joinsec1;
