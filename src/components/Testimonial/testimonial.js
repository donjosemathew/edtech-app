import React from "react";
import "./testimonial.style.scss";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial-card";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
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
    <div className="testimonial ">
      <h2 className="about__head testimonial__head">
        Hear From The <br />
        World
      </h2>
      <p className="testimonial__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        architecto ut, ab, nesciunt quidem laudantium repellendus fugit dolores
      </p>
      <div className="testimonial__holder">
        <Carousel {...settings}>
          <div className="testimonial__section">
            <TestimonialCard />
          </div>
          <div className="testimonial__section">
            <TestimonialCard />
          </div>
          <div className="testimonial__section">
            <TestimonialCard />
          </div>
          <div className="testimonial__section">
            <TestimonialCard />
          </div>
          <div className="testimonial__section">
            <TestimonialCard />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
const Carousel = styled(Slider)`
  width: 100%;
  .slick-prev:before,
  .slick-next:before {
    display: none;
  }
`;
export default Testimonial;
