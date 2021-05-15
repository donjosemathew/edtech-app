import React from "react";
import "./courses.style.scss";
import { IoMdTime, IoMdPerson } from "react-icons/io";
const Card = () => {
  return (
    <div className="card">
      <div className="card__top">
        <h5>Can coffee make you a better developer?</h5>
      </div>
      <p className="card__para">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <div className="card__middle">
        <IoMdTime size="2em" className="icon-course" />
        <p className="time">25 Hours</p>
      </div>
      <div className="card__middle">
        <IoMdPerson size="2em" className="icon-course" />
        <p className="time">1200+</p>
      </div>
      <div className="card__bottom">
        <img
          src="/images/users/user.jpg"
          alt="Instructor"
          className="teacher-img"
        />
        <p className="teacher time">
          Jonathan Reinink <span>Aug 18</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
