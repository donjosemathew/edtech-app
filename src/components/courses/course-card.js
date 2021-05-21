import React from "react";
import Fade from "react-reveal/Fade";
import "./courses.style.scss";
import { IoMdTime, IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const url = "/course/" + data.id;
  return (
    <div className="card-holder">
      <Fade>
        <Link to={url} style={{ textDecoration: "none" }}>
          <div className="card">
            <div
              className="card__top"
              style={{
                backgroundImage: `linear-gradient(
        222.96deg,
        rgba(12, 12, 12, 0.31) 32.45%,
        rgba(0, 0, 0, 0.25) 114.08%
      ),
      url("${data.img}")`,
              }}
            >
              <h5>{data.head}</h5>
            </div>
            <p className="card__para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <div className="card__middle">
              <IoMdTime size="2em" className="icon-course" />
              <p className="time">{data.hours} Hours</p>
            </div>
            <div className="card__middle">
              <IoMdPerson size="2em" className="icon-course" />
              <p className="time">{data.student}</p>
            </div>
            <div className="card__bottom">
              <img
                src={data.instrImg}
                alt="Instructor"
                className="teacher-img"
              />
              <p className="teacher time">
                {data.instructor}
                <span>Aug 18</span>
              </p>
            </div>
          </div>
        </Link>
      </Fade>
    </div>
  );
};
export default Card;
