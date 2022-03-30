import React, { Component } from "react";
import Social from "./Social";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about" id="about">
        <div className="container">
          <div
            className="me"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <img
              src={window.location.origin + "/images/profile-image.jpg"}
              alt="Nourelden Rihan"
            />
            <Social />
          </div>
          <div
            className="content"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1200"
          >
            <div className="section-heading">
              <h2>A little more about Nourelden</h2>
              <p>3D Modelling Hobbyist & Frontend Developer</p>
            </div>
            <div className="about-text">
              <p>
                Creative & Enthusiastic Egyptain interested in Web Development,
                3D & Video Games.
              </p>
              <p>
                Along side Medical School, Learning different hobbies has always
                been a thrill and i am always ready for a new Adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
