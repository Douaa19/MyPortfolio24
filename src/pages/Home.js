import React, { useState } from "react";
import {
  Header,
  Projects,
  About,
  Skills,
  Education,
  Contact,
  Footer,
} from "../components/layout";
import AnimatedSection from "../components/AnimatedSection";
import ContactDonePopup from "../components/molecules/ContactDonePopup";

function Home() {
  const [section, setSection] = useState(null);
  const [light, setLight] = useState(false);
  const [contactDone, setContactDone] = useState(false); // if false == dark mode is on

  return (
    <div
      className={`w-full ssm:transition ssm:duration-500 ${
        light ? "bg-gray-50" : "bg-dark"
      }`}>
      <div className="flex flex-col items-center">
        <Header
          setSection={setSection}
          section={section}
          light={light}
          setLight={setLight}
        />
        <AnimatedSection id="about">
          <About light={light} />
        </AnimatedSection>
        <AnimatedSection id="projects">
          <Projects light={light} />
        </AnimatedSection>
        <AnimatedSection id="skills">
          <Skills light={light} />
        </AnimatedSection>
        <AnimatedSection id="education">
          <Education light={light} />
        </AnimatedSection>
        <AnimatedSection id="contact">
          <Contact light={light} setContactDone={setContactDone} />
        </AnimatedSection>
        <AnimatedSection id="footer">
          <Footer light={light} />
        </AnimatedSection>
        {contactDone !== false && (
          <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
            <ContactDonePopup light={light} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
