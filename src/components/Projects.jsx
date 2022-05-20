import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          id: 1,
          title: "Ultra Brand",
          desc: "Watches brand website",
          techs: "HTML5, CSS3, JS, React, Redux, Netlify",
          link: "https://ultra-brand.netlify.app",
          img: "/images/Ultra-Brand.PNG",
        },
        {
          id: 2,
          title: "GemGlobe",
          desc: "GemGlobe Instagram Clone",
          techs: "JS, SCSS, NextJS, JSX, Vercel",
          link: "https://gemglobe.vercel.app",
          img: "/images/GemGlobe.png",
        },
        {
          id: 3,
          title: "RihanCGI",
          desc: "3D Sculpting tools website",
          techs: "HTML5, CSS3, JS, Bootstrap, Firebase",
          link: "https://rihan-cgi.web.app",
          img: "/images/RihanCGI.PNG",
        },
        {
          id: 4,
          title: "Pizza",
          desc: "Pizza restaurant website",
          techs: "HTML5, CSS3, JS, API, NodeJS, Github",
          link: "https://noureldenrihan2002.github.io/Pizza-Restaurant-Website",
          img: "/images/Pizza.PNG",
        },
        {
          id: 5,
          title: "Weather Daily",
          desc: "Weather Daily website",
          techs: "HTML5, CSS3, JS, API, Firebase",
          link: "https://weather--daily.web.app",
          img: "/images/Weather-Daily.PNG",
        },
      ],
    };
  }

  render() {
    return (
      <div className="projects" id="projects">
        <div className="container">
          <div
            className="section-heading"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h2>Projects</h2>
            <p>Websites i made</p>
          </div>
          <div
            className={
              this.state.projectData.length % 2 === 0
                ? " projects-area g2"
                : " projects-area g3"
            }
          >
            {this.state.projectData.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                desc={project.desc}
                techs={project.techs}
                link={project.link}
                img={project.img}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
