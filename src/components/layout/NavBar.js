import React from "react";
import { ReactComponent as MyLogo } from "../../assets/MyLogo1.svg";

function NavBar(props) {
  const listClass =
    "text-white cursor-pointer uppercase px-2 py-0 ssm:py-2 md:mx-2 relative text-white lg:text-16 md:14 hover:text-main sm:text-12 flex items-center ssm:transition ssm:duration-500 ssm:ease-in-out ssm:hover:-translate-x-4 md:hover:-translate-y-1 md:hover:-translate-x-0 ssm:hover:-translate-y-0";

  return (
    <div className="md:flex md:justify-between md:items-center w-full">
      <div className="flex items-end">
        <span className="text-main uppercase text-32 font-bold">d</span>
        <span className="text-white uppercase text-24 font-bold">olr</span>
      </div>
      <div className="md:w-8/12 flex justify-end md:relative absolute right-8 ssm:fixed">
        <ul className="flex justify-between items-end w-full ssm:flex-col md:flex-row">
          <li
            className={listClass}
            onClick={() => props.setSection.setSection("about")}>
            about
          </li>
          <li className={listClass}>projects</li>
          <li className={listClass}>skills</li>
          <li className={listClass}>experience</li>
          <li className={listClass}>education</li>
          <li className={listClass}>contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
