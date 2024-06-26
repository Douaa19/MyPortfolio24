import React from "react";
import { HeroHeader, NavBar } from "./index";

function Header(props) {
  return (
    <div className="w-10/12 h-max pt-2 flex flex-col items-center">
      <NavBar
        setSection={props}
        section={props.section}
        light={props.light}
        setLight={props.setLight}
      />
      <HeroHeader light={props.light} />
    </div>
  );
}

export default Header;
