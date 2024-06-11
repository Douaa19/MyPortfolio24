import React, { useState } from "react";
import { Header } from "../components/layout";

function Home() {
  const [section, setSection] = useState(null);
  const [light, setLight] = useState(false); // if false == dark mode is on

  return (
    <div className={`w-full ${light ? "bg-white" : "bg-dark"}`}>
      <div className="flex flex-col items-center">
        <Header
          setSection={setSection}
          section={section}
          light={light}
          setLight={setLight}
        />
      </div>
    </div>
  );
}

export default Home;
