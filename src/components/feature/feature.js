import React from "react";
import "./feature.style.scss";
import Fade from "react-reveal/Fade";
import MyImage from "../lazyImage";
const Feature = () => {
  return (
    <div className="feature">
      <div className="feature__col feature__col1">
        <Fade left delay={0}>
          <h2 className="about__head feature__head">
            What Will You <br /> Discover ?
          </h2>
        </Fade>
        <Fade left delay={100}>
          <p>
            Explore new skills, deepen existing passions, and get lost in
            creativity. What you find just might surprise and inspire
            you.adipiscing elit. Donec ut sem orci. Nunc et erat sagittis,
          </p>
        </Fade>
      </div>
      <div className="feature__col2">
        <Fade duration={1000}>
          <div className="">
            <img
              src="/images/feature1.jpg"
              alt="Feature Section"
              className="feature__img"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Feature;
