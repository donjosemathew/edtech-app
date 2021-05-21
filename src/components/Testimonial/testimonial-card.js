import React from "react";
const TestimonialCard = ({ data }) => {
  return (
    <div className="testimonial__section">
      <div className="testimonial-card">
        <img src={data.img} alt="User" className="testimonial-card__img" />
        <p className="testimonial-card__quote">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient mo.
        </p>
        <p className="testimonial-card__user">
          {data.user}
          <span>{data.clg}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
