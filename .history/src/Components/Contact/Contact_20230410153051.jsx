import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#abf1ff94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          ></input>
          <input
            type="email"
            name="user_name"
            className="user"
            placeholder="Name"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
