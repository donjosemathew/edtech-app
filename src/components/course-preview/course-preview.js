import React from "react";
import "./course-preview.style.scss";
import { Link } from "react-router-dom";
import { IoMdTime, IoMdPerson } from "react-icons/io";
import "video-react/dist/video-react.css"; // import css
import { Player, BigPlayButton } from "video-react";
import { BsHeart, BsPlusCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
function Coursepreview() {
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
  const { id } = useParams();
  const cardContent = data[id - 1];
  return (
    <div
      className="course-preview"
      style={{
        backgroundImage: `url("${cardContent.img.split("?")[0]}")`,
      }}
    >
      <div className="course-preview__container">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="signin__logo" />
        </Link>
        <div className="course-preview__container__grid">
          <div className="course-preview__container__grid__col1">
            <h2 className="course-preview__head">{cardContent.head}</h2>
            <p className="course-preview__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.
            </p>
            <div className="course-preview__bottom">
              <div className="course-preview__bottom__col1">
                <div className="card__middle">
                  <IoMdTime size="2em" className="icon-course" />
                  <p className="time">{cardContent.hours} Hours</p>
                </div>
                <div className="card__middle">
                  <IoMdPerson size="2em" className="icon-course" />
                  <p className="time">{cardContent.student}+</p>
                </div>
              </div>
              <div className="card__bottom">
                <img
                  src={cardContent.instrImg}
                  alt="Instructor"
                  className="teacher-img"
                />
                <p className="teacher time">
                  {cardContent.instructor} <span>Aug 18</span>
                </p>
              </div>
            </div>
          </div>
          <div className="course-preview__container__grid__col2">
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
            <ul>
              <li>
                &#10004; Handle advanced techniques like Dimensionality
                Reduction
              </li>
              <li>&#10004; Create strong added value to your business</li>
              <li>&#10004; Make robust Machine Learning models</li>
              <li>&#10004; Make accurate predictions</li>
            </ul>
            <div className="btn-holder">
              <button>
                <BsHeart />
                <span> Wishlist</span>
              </button>
              <button>
                <BsPlusCircle />
                <span> Enroll Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coursepreview;
