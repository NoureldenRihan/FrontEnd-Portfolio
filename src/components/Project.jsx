import React from "react";

function Project(props) {
  return (
    <div
      className="project"
      data-aos="fade-up"
      data-aos-delay={props.id * 100 + 200}
      data-aos-duration="1200"
    >
      <div>
        <div className="data-overlay">
          <h4 className="title">{props.title}</h4>
          <h2>{props.desc}</h2>
          <h4>{props.techs}</h4>
          <div className="buttons">
            <a href={props.github} className="githubLink">
              <button>Github Repo</button>
            </a>
            <a href={props.link} className="websiteLink">
              <button>Website</button>
            </a>
          </div>
        </div>
        <img
          src={window.location.origin + props.img}
          className="project-img"
          alt={props.title}
        />
      </div>
    </div>
  );
}

export default Project;
