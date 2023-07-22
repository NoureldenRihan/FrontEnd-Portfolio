import React from "react";

function Skill(props) {
  return (
    <div
      className="skill-area"
      data-aos="fade-up"
      data-aos-delay={props.id * 100 + 200}
      data-aos-duration="800"
    >
      <div className="skill">
        <img src={props.icon} alt={props.name} />
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default Skill;
