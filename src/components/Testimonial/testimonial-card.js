import React from "react";
const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <img
        src="/images/users/65.jpg"
        alt="User"
        className="testimonial-card__img"
      />
      <p className="testimonial-card__quote">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient mo.
      </p>
      <p className="testimonial-card__user">
        Clara Gonzales
        <span>Student VHS Dumston</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
