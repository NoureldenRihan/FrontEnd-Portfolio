import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="social-links">
        <a href="https://twitter.com/Nour_Rihan_">
          <i className="devicon-twitter-original"></i>
        </a>
        <a href="https://github.com/NoureldenRihan">
          <i className="devicon-github-original"></i>
        </a>
        <a href="https://www.linkedin.com/in/noureldenrihan/">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
    );
  }
}

export default Social;
