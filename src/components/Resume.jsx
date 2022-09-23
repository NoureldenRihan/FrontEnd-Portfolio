import React, { Component } from "react";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div className="resume-holder">
        <a
          href="NoureldenRihanResume.pdf"
          download="NoureldenRihanFrontendResume"
        >
          <button
            className="resume"
            data-aos="fade-in"
            data-aos-delay="1800"
            data-aos-duration="2300"
          >
            Download Resume
          </button>
        </a>
      </div>
    );
  }
}

export default Resume;
