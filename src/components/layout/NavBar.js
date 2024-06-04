import React from "react";
import { ReactComponent as MyLogo } from "../../assets/MyLogo1.svg";

function NavBar() {
  const myList = [
    { name: "about me", link: "/" },
    { name: "projects", link: "/" },
    { name: "skills", link: "/" },
    { name: "experience", link: "/" },
    { name: "education", link: "/" },
    { name: "contact", link: "/" },
  ];
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-end">
        <span className="text-main uppercase text-32 font-bold">d</span>
        <span className="text-white uppercase text-24 font-bold">olr</span>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <div className="flex justify-around w-full">
          {myList.map((link, index) => (
            <>
              <a
                key={index}
                href={`#${link.link}`}
                className="uppercase px-2 relative text-white text-16 link">
                {link.name}
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
