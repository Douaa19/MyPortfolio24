import React from "react";
import { HeroHeader, NavBar } from "./index";

function Header() {
  return (
    <div className="w-11/12 h-screen pt-2">
      <NavBar />
      <HeroHeader />
    </div>
  );
}

export default Header;
