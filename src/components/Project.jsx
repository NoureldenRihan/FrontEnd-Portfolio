import React, { Component } from "react";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="project"
        data-aos="fade-up"
        data-aos-delay={this.props.id * 100 + 200}
        data-aos-duration="1200"
      >
        <div>
          <div className="data-overlay">
            <h4 className="title">{this.props.title}</h4>
            <h2>{this.props.desc}</h2>
            <h4>{this.props.techs}</h4>
            <div className="buttons">
              <a href={this.props.github} className="githubLink">
                <button>Github Repo</button>
              </a>
              <a href={this.props.link} className="websiteLink">
                <button>Website</button>
              </a>
            </div>
          </div>
          <img
            src={window.location.origin + this.props.img}
            className="project-img"
            alt={this.props.title}
          />
        </div>
      </div>
    );
  }
}

export default Project;
