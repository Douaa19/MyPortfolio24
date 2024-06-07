import React from "react";
import { HeroHeader, NavBar } from "./index";
import { Introduction, Projects } from "../layout";

function Header(props) {
  let section;

  if (props.section === null) {
    section = <HeroHeader />;
  } else if (props.section === "about") {
    section = <Introduction />;
  } else if (props.section === "projects") {
    section = <Projects />;
  } else if (props.section === "skills") {
    section = (
      <div className="text-white">
        <h1>Hello skills</h1>
      </div>
    );
  }

  return (
    <div className="w-11/12 h-screen pt-2 flex flex-col items-center">
      <NavBar setSection={props} section={props.section} />
      {section}
    </div>
  );
}

export default Header;
