import React, { Component } from "react";
import Resume from "./Resume";
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
              <p>Frontend Developer</p>
            </div>
            <div className="about-text">
              <p>
                Experienced with building Websites using modern Technologies as
                ReactJS, NextJS etc.
              </p>
              <p>
                Loves to try out new tech tools and master them, collaborate on
                team Projects, and work on extraordinary project ideas.
              </p>
              <Resume />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
