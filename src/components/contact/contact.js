import React from "react";
import "./contact.style.scss";
import { IoIosCall, IoIosMail, IoIosPin } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__col1">
        <h2 className="about__head contact__head">
          Get In Touch
          <br />
          With Us
        </h2>
        <p className="contact__sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
          obcaecati dolorum rem reprehenderit repellat itaque! Velit alias, sed
          totam dicta esse, nemo voluptatibus sit deserunt quisquam, asperiores
          possimus ea incidunt.
        </p>
        <div className="contact__col-holder">
          <IoIosCall className="contact__icn" size="3em" />
          <p className="contact__text">(809)-984-4368</p>
        </div>
        <div className="contact__col-holder">
          <IoIosMail className="contact__icn" size="3em" />
          <p className="contact__text">help@skillbook.com</p>
        </div>
        <div className="contact__col-holder">
          <IoIosPin className="contact__icn" size="3em" />
          <p className="contact__text">2132 Country Club Rd</p>
        </div>
        <p className="contact__sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, t
          deserunt quisquam, asperiores possimus ea incidunt.
        </p>
      </div>

      <div className="contact__col2">s</div>
    </div>
  );
};
export default Contact;
