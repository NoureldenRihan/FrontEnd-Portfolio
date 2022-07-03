import React, { Component } from "react";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="skill-area"
        data-aos="fade-up"
        data-aos-delay={this.props.id * 100 + 200}
        data-aos-duration="800"
      >
        <div className="skill">
          {this.props.icon}
          <h4>{this.props.name}</h4>
        </div>
      </div>
    );
  }
}

export default Skill;
