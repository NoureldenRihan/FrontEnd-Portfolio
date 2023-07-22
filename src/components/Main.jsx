import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Landing from "./Landing";
import Projects from "./Projects";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: true,
  useClassNames: false,
});

function Main() {
  return (
    <>
      <Landing />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Main;
