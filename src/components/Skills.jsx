import React, { useState } from "react";
import Skill from "./Skill";
import nextjs from "../SVGs/nextjs.svg";
import reactjs from "../SVGs/reactjs.svg";
import javascript from "../SVGs/javascript.svg";
import typescript from "../SVGs/typescript.svg";
import git from "../SVGs/git.svg";
import bootstrap from "../SVGs/bootstrap.svg";
import css from "../SVGs/css.svg";
import sass from "../SVGs/sass.svg";

function Skills() {
  const [skillsData] = useState([
    {
      id: 1,
      icon: nextjs,
      name: "NextJS",
    },
    {
      id: 2,
      icon: reactjs,
      name: "ReactJS",
    },
    {
      id: 3,
      icon: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      icon: typescript,
      name: "TypeScript",
    },

    {
      id: 5,
      icon: git,
      name: "Git",
    },
    {
      id: 6,
      icon: bootstrap,
      name: "Bootstrap",
    },

    {
      id: 7,
      icon: css,
      name: "CSS3",
    },
    {
      id: 8,
      icon: sass,
      name: "SASS",
    },
  ]);

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div
          className="section-heading"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h2>Skills</h2>
          <p>My Tech Stack</p>
        </div>
        <div className="skills-area">
          {skillsData.map((skill) => (
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

export default Skills;
