import React, { Component } from "react";
import Social from "./Social";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer
        className="footer"
        id="footer"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-offset="0"
      >
        <div className="container">
          <h1>Nourelden Rihan Web Development Portofolio</h1>
          <Social />
        </div>
      </footer>
    );
  }
}

export default Footer;
