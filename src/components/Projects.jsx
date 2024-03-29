import React, { useState } from "react";
import Project from "./Project";

function Projects() {
  const [projectsData] = useState([
    {
      id: 1,
      title: "Stylized Facebook",
      desc: "Facebook Dark Mode Clone",
      techs: "React, CSS3, JS, Firebase",
      link: "https://stylizedfacebook.web.app",
      github: "https://github.com/NoureldenRihan/Stylized-Facebook",
      img: "/images/StylizedFacebook.png",
    },
    {
      id: 2,
      title: "Gaming Portal",
      desc: "Gaming Portal website",
      techs: "React, CSS3, JS, Firebase",
      link: "https://gaming-portal0.web.app/",
      github: "https://github.com/NoureldenRihan/gaming-portal",
      img: "/images/Gaming-Portal.jpg",
    },

    {
      id: 3,
      title: "Effortless Charts",
      desc: "Chart Maker Website",
      techs: "React, Redux, CSS3, JS, Firebase",
      link: "https://effortless-charts.web.app",
      github: "https://github.com/NoureldenRihan/Effortless-Chart",
      img: "/images/Effortless-Charts.png",
    },
    {
      id: 4,
      title: "CSS Fun",
      desc: "CSS Tricks website",
      techs: "React, CSS3, JS, Firebase",
      link: "https://cssfun.web.app",
      github: "https://github.com/NoureldenRihan/CSS-Fun",
      img: "/images/CSS-Fun.png",
    },
    {
      id: 5,
      title: "GemGlobe",
      desc: "GemGlobe Instagram Clone",
      techs: "JS, SCSS, NextJS, JSX, Vercel",
      link: "https://gemglobe.vercel.app",
      github: "https://github.com/NoureldenRihan/GemGlobe",
      img: "/images/GemGlobe.png",
    },
    {
      id: 6,
      title: "Ultra Brand",
      desc: "Watches brand website",
      techs: "CSS3, JS, React, Redux, Netlify",
      link: "https://ultra-brand.netlify.app",
      github: "https://github.com/NoureldenRihan/Ultra-Brand",
      img: "/images/Ultra-Brand.PNG",
    },
    {
      id: 7,
      title: "Pizza",
      desc: "Pizza restaurant website",
      techs: "HTML5, CSS3, JS, API, NodeJS, Github",
      link: "https://noureldenrihan.github.io/Pizza-Restaurant-Website",
      github: "https://github.com/NoureldenRihan/Pizza-Restaurant-Website",
      img: "/images/Pizza.PNG",
    },
  ]);
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
        <div className="projects-area g2">
          {projectsData.map((project) => (
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

export default Projects;
