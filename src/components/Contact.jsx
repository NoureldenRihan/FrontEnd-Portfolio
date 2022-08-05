import React, { Component } from "react";
import Form from "./Form";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
          <div className="contact-details">
            <div
              className="section-heading"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <h2>Contact Info</h2>
              <p>Feel Free to Get in touch with me at anytime.</p>
            </div>
            <div
              className="details"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              <ul>
                <li>
                  <a href="mailto:noureldenrihan2002@gmail.com">
                    noureldenrihan2002@gmail.com
                  </a>
                </li>
                <li>+20 111-650-6071</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
