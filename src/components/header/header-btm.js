import React from "react";
import "./header.style.scss";
import Fade from "react-reveal/Fade";
const Headerbtm = () => {
  return (
    <div className="header-btm">
      <div className="header-btm__content">
        <Fade left>
          <h2>Locked In Lockdown ?</h2>
        </Fade>
        <Fade left delay={500}>
          <h1>
            Learn A New
            <span>SKILL . . .</span>
          </h1>
        </Fade>
      </div>
      <img
        src="/images/header-img.png"
        alt="boy and girl"
        className="header-btm__img"
      />
    </div>
  );
};

export default Headerbtm;
