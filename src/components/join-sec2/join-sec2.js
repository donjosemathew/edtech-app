import React from "react";
import "./join-sec2.style.scss";
import Fade from "react-reveal/Fade";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const Joinsec2 = () => {
  return (
    <div className="joinsec joinsec2">
      <Fade left>
        <h3 className="head2">
          Teach the world,<span>Online</span>
        </h3>
      </Fade>

      <Link to="/signin" style={{ textDecoration: "none" }}>
        <div className="joinbtn">
          Join As Instructor
          <BsArrowRightShort size="2em" className="icon" />
        </div>
      </Link>
      <Fade>
        <img
          src="/images/joinsec-2.png"
          alt="Women holding pen"
          className=" img-women2"
        />
      </Fade>
      <div className="circle2 "></div>
    </div>
  );
};

export default Joinsec2;
