import React from "react";
import "./Main.styles.scss";

import Header from "../../components/header/header.component";
import Intro from "../../pages/intro/intro";
import Skills from "../../pages/skills/skills";
import Projects from "../../pages/projects/project";
import Experiences from "../../pages/experiences/experiences";
import Certification from "../../pages/certification/certification";
import Footer from "../../components/footer/footer.component";
import Top from "../../components/scroll/scroll.component";

const Main = () => {
  return (
    <div className="main-body">
      <Header />
      <Intro />
      <Skills />
      <Projects />
      <Certification />
      <Experiences />
      <Footer />

      <Top />
    </div>
  );
};

export default Main;
