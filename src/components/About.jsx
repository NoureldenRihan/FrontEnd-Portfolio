import React from "react";
import Resume from "./Resume";
import Social from "./Social";

function About() {
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
            className="meImg"
            src="/images/profile-image.jpg"
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
            <h2>Nourelden Rihan</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="about-text">
            <p>
              Experienced with building Websites using modern Technologies as
              ReactJS, NextJS etc.
            </p>
            <p>
              Loves to try out new tech tools and master them, Collaborate on
              team Projects, and Work on extraordinary project ideas.
            </p>
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
