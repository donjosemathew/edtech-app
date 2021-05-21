import React from "react";
import "./courses.style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Card from "./course-card";
import Fade from "react-reveal/Fade";
const Course = () => {
  const data = [
    {
      head: "Fundamentals of DSLR Photography",
      instructor: "Willie Sanders",
      img: "https://images.unsplash.com/photo-1482746673045-d8c155829510?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
      instrImg: "/images/users/46.jpg",
      hours: "20",
      student: "1200+",
      id: 1,
    },
    {
      head: "Create a Stylised Digital Portrait",
      instructor: "Abigail Sutton",
      img: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
      instrImg: "/images/users/77.jpg",
      hours: "30",
      student: "4500+",
      id: 2,
    },
    {
      head: "Complete Blender Creator: Learn 3D Modelling",
      instructor: "Jesus Weaver",
      img: "https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80",
      instrImg: "/images/users/79.jpg",
      hours: "50",
      student: "5000+",
      id: 3,
    },
    {
      head: "User Experience Design Essentials",
      instructor: "Deanna Cooper",
      img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      instrImg: "/images/users/65.jpg",
      hours: "40",
      student: "2500+",
      id: 4,
    },
    {
      head: "Graphic Design Masterclass - Learn GREAT Design",
      instructor: "Abigail Sutton",
      img: "https://images.unsplash.com/photo-1551547600-8d30c2559da8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
      instrImg: "/images/users/77.jpg",
      hours: "40",
      student: "4500+",
      id: 5,
    },
    {
      head: "The Web Developer Bootcamp 2021",
      instructor: "Jesus Weaver",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      instrImg: "/images/users/79.jpg",
      hours: "50",
      student: "5000+",
      id: 6,
    },
  ];

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
    <div className="course" name="course">
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
          {data.map((data) => {
            return <Card data={data} key={data.id} />;
          })}
        </Carousel>
      </div>
    </div>
  );
};
const Carousel = styled(Slider)``;
export default Course;
