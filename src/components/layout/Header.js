import React from "react";
import { HeroHeader, NavBar } from "./index";
import { Introduction, Projects } from "../layout";

function Header(props) {
  return (
    <div className="w-11/12 h-max pt-2 flex flex-col items-center">
      <NavBar setSection={props} section={props.section} />
      <HeroHeader />
    </div>
  );
}

export default Header;
