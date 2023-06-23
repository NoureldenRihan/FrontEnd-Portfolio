import React, { Component } from "react";
import twitter from "../SVGs/twitter.svg";
import github from "../SVGs/github.svg";
import linkedin from "../SVGs/linkedin.svg";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="social-links">
        <div className="social-link">
          <a href="https://twitter.com/Nour_Rihan_">
            <img src={twitter} />
          </a>
        </div>

        <div className="social-link">
          <a href="https://github.com/NoureldenRihan">
            <img src={github} />
          </a>
        </div>

        <div className="social-link">
          <a href="https://www.linkedin.com/in/noureldenrihan/">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    );
  }
}

export default Social;
