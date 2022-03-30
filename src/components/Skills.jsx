import React, { Component } from "react";
import Skill from "./Skill";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          id: 1,
          icon: <i className="icon devicon-javascript-plain"></i>,
          name: "JavaScript",
        },
        {
          id: 2,
          icon: <i className="icon devicon-css3-plain-wordmark"></i>,
          name: "CSS3",
        },
        {
          id: 3,
          icon: <i className="icon devicon-html5-plain-wordmark"></i>,
          name: "HTML5",
        },
        {
          id: 4,
          icon: <i className="icon devicon-git-plain"></i>,
          name: "Git",
        },
        {
          id: 5,
          icon: <i className="icon devicon-python-plain"></i>,
          name: "Python",
        },
        {
          id: 6,
          icon: <i className="icon devicon-nodejs-plain-wordmark"></i>,
          name: "NodeJS",
        },
        {
          id: 7,
          icon: <i className="icon devicon-bootstrap-plain"></i>,
          name: "Bootstrap",
        },
        {
          id: 8,
          icon: <i className="icon devicon-react-original"></i>,
          name: "React",
        },
      ],
    };
  }

  render() {
    return (
      <div className="skills" id="skills">
        <div className="container">
          <div
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <h2>What things i am Skilled at...</h2>
            <p>Programming Languages and Frameworks i am skilled with.</p>
          </div>
          <div className="skills-area">
            {this.state.skills.map((skill) => (
              <Skill
                key={skill.id}
                id={skill.id}
                icon={skill.icon}
                name={skill.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
