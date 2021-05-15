import React from "react";
import "./courses.style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Card from "./course-card";
import Fade from "react-reveal/Fade";
const Course = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="course">
      <Fade bottom>
        <h2 className="about__head">Find What Inspire You</h2>
      </Fade>
      <Fade>
        <ul className="course__nav">
          <li className="course__item">Design</li>
          <li className="course__item">Writing</li>
          <li className="course__item">Animation</li>
          <li className="course__item">Business</li>
          <li className="course__item">Coding</li>
          <li className="course__item">Editing</li>
        </ul>
      </Fade>
      <div className="course__holder">
        <Carousel {...settings}>
          <div className="card-holder">
            <Fade>
              <Card />
            </Fade>
          </div>
          <div className="card-holder">
            <Fade>
              <Card />
            </Fade>
          </div>
          <div className="card-holder">
            <Fade>
              <Card />
            </Fade>
          </div>
          <div className="card-holder">
            <Fade>
              <Card />
            </Fade>
          </div>
          <div className="card-holder">
            <Fade>
              <Card />
            </Fade>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
const Carousel = styled(Slider)``;
export default Course;
