import React from "react";
import "./about.style.scss";
import Fade from "react-reveal/Fade";
import MyImage from "../lazyImage";
const About = () => {
  return (
    <div className="about" name="about">
      <div className="about__col">
        <Fade left>
          <h2 className="about__head">
            Bridge To <br />
            Your Dreams
          </h2>
        </Fade>
        <Fade left delay={100}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
            sem orci. Nunc et erat sagittis, consectetur adipiscing elit. Donec
            ut sem orci. Nunc et erat sagittis consectetur
          </p>
        </Fade>
      </div>
      <div className="about__col about__col2">
        <Fade duration={1000}>
          <div className="about__col2__col1">
            <MyImage
              src="/images/about-2.jpg"
              alt="About Section"
              className="about__img1"
            />
          </div>
        </Fade>
        <div className="about__col2__col2">
          <Fade big>
            <MyImage
              src="/images/about-1.jpg"
              alt="About Section"
              className="about__img2"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default About;
