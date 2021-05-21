import React from "react";
import "./testimonial.style.scss";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./testimonial-card";
const Testimonial = () => {
  const testidata = [
    {
      user: "Pauline Robinson",
      img: "/images/users/65.jpg",
      clg: "University of Oxford",
      id: 1,
    },
    {
      user: "Marie Chapman",
      img: "/images/users/user.jpg",
      clg: "Australian National University",
      id: 2,
    },
    {
      user: "Wyatt Carr",
      img: "/images/users/79.jpg",
      clg: "Imperial College London",
      id: 3,
    },
    {
      user: "Marion Fernandez",
      img: "/images/users/77.jpg",
      clg: "University College London",
      id: 4,
    },
    {
      user: "Pauline Robinson",
      img: "/images/users/46.jpg",
      clg: "University of Oxford",
      id: 5,
    },
  ];
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
          {testidata.map((data) => {
            return <TestimonialCard key={data.id} data={data} />;
          })}
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
