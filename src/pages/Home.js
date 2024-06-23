import React, { useState } from "react";
import { Header, Projects } from "../components/layout";
import AnimatedSection from "../components/AnimatedSection";

function Home() {
  const [section, setSection] = useState(null);
  const [light, setLight] = useState(false); // if false == dark mode is on

  return (
    <div
      className={`w-full ssm:transition ssm:duration-500 ${
        light ? "bg-white" : "bg-dark"
      }`}>
      <div className="flex flex-col items-center">
        <Header
          setSection={setSection}
          section={section}
          light={light}
          setLight={setLight}
        />
        <AnimatedSection id="projects">
          <Projects light={light} />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Home;
