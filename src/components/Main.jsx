import React, { Component } from "react";
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Landing />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
