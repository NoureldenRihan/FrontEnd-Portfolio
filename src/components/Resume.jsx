import React, { Component } from "react";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume-holder">
        <a
          href="Nourelden Rihan CV.pdf"
          download="Nourelden Rihan Frontend Resume"
        >
          <button
            className="resume"
            data-aos="fade-in"
            data-aos-delay="2000"
            data-aos-duration="2500"
          >
            Download Resume
          </button>
        </a>
      </div>
    );
  }
}

export default Resume;
