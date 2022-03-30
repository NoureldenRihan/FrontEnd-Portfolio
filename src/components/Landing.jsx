import React, { Component } from "react";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="landing" id="landing">
        <div className="container">
          <div
            className="fix-overlay"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="fit-overlay">
              <div className="main-text">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1200"
                >
                  Hi, I am Nourelden
                </h1>
                <h4
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-duration="1200"
                >
                  A Frontend Developer
                </h4>
                <a href="#skills">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="900"
                    data-aos-duration="1200"
                  >
                    Discover More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
