import React, { Component } from "react";
import Project from "./Project";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          id: 1,
          title: "GemGlobe",
          desc: "GemGlobe Instagram Clone",
          techs: "JS, SCSS, NextJS, JSX, Vercel",
          link: "https://gemglobe.vercel.app",
          github: "https://github.com/NoureldenRihan2002/GemGlobe",
          img: "/images/GemGlobe.png",
        },
        {
          id: 2,
          title: "Stylized Facebook",
          desc: "Facebook Dark Mode Clone",
          techs: "React, CSS3, JS, Firebase",
          link: "https://stylizedfacebook.pages.dev",
          github: "https://github.com/NoureldenRihan2002/Stylized-Facebook",
          img: "/images/StylizedFacebook.png",
        },
        {
          id: 3,
          title: "CSS Fun",
          desc: "CSS Tricks website",
          techs: "React, CSS3, JS, Firebase",
          link: "https://cssfun.pages.dev",
          github: "https://github.com/NoureldenRihan2002/CSS-Fun",
          img: "/images/CSS-Fun.png",
        },
        {
          id: 4,
          title: "Ultra Brand",
          desc: "Watches brand website",
          techs: "CSS3, JS, React, Redux, Netlify",
          link: "https://ultra-brand.netlify.app",
          github: "https://github.com/NoureldenRihan2002/Ultra-Brand",
          img: "/images/Ultra-Brand.PNG",
        },
        {
          id: 5,
          title: "Effortless Charts",
          desc: "Chart Maker Website",
          techs: "React, Redux, CSS3, JS, Firebase",
          link: "https://effortless-charts.pages.dev",
          github: "https://github.com/NoureldenRihan2002/Effortless-Chart",
          img: "/images/Effortless-Charts.png",
        },
        {
          id: 6,
          title: "RihanCGI",
          desc: "3D Sculpting tools website",
          techs: "HTML5, CSS3, JS, Bootstrap, Firebase",
          link: "https://rihancgi.pages.dev",
          github: "",
          img: "/images/RihanCGI.PNG",
        },
        {
          id: 7,
          title: "Pizza",
          desc: "Pizza restaurant website",
          techs: "HTML5, CSS3, JS, API, NodeJS, Github",
          link: "https://noureldenrihan2002.github.io/Pizza-Restaurant-Website",
          github:
            "https://github.com/NoureldenRihan2002/Pizza-Restaurant-Website",
          img: "/images/Pizza.PNG",
        },
        {
          id: 8,
          title: "Weather Daily",
          desc: "Weather Daily website",
          techs: "HTML5, CSS3, JS, API, Firebase",
          link: "https://weather--daily.web.app",
          github: "https://github.com/NoureldenRihan2002/Weather-Daily",
          img: "/images/Weather-Daily.png",
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
            // className={
            //   this.state.projectData.length % 2 === 0
            //     ? " projects-area g2"
            //     : " projects-area g3"
            // }
            className="projects-area g2"
          >
            {this.state.projectData.map((project) => (
              <Project
                key={project.id}
                id={project.id}
                title={project.title}
                desc={project.desc}
                techs={project.techs}
                link={project.link}
                github={project.github}
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
