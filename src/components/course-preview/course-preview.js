import React from "react";
import "./course-preview.style.scss";
import { Link } from "react-router-dom";
import { IoMdTime, IoMdPerson } from "react-icons/io";
function Coursepreview() {
  return (
    <div
      className="course-preview"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1621299279972-953c4d55696f")`,
      }}
    >
      <div className="course-preview__container">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="signin__logo" />
        </Link>
        <div className="course-preview__container__grid">
          <div className="course-preview__container__grid__col1">
            <h2 className="course-preview__head">
              Can coffee make you a better developer?
            </h2>
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
                  <p className="time">25 Hours</p>
                </div>
                <div className="card__middle">
                  <IoMdPerson size="2em" className="icon-course" />
                  <p className="time">1200+</p>
                </div>
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
          </div>
          <div className="course-preview__container__grid__col2">s</div>
        </div>
      </div>
    </div>
  );
}

export default Coursepreview;
