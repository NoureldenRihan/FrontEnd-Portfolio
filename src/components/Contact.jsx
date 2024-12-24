import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1200"
        >
          <h2>Get in Touch</h2>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
