import React, { useState } from "react";
import { ReactComponent as Dark } from "../../assets/moon-svgrepo-com.svg";
import { ReactComponent as Light } from "../../assets/sun-svgrepo-com.svg";

function NavBar(props) {
  let [open, setOpen] = useState(false);

  const isOpen = open ? "open" : "";

  const listClass =
    "cursor-pointer uppercase px-2 py-0 ssm:py-2 md:mx-2 relative lg:text-16 hover:text-main sm:text-12 flex items-center ssm:transition ssm:duration-500 ssm:ease-in-out ssm:hover:-translate-x-4 md:hover:-translate-y-1 md:hover:-translate-x-0 ssm:hover:-translate-y-0";

  return (
    <div className="md:flex md:justify-between md:items-center w-full">
      <div className="flex items-end">
        <span className="text-main uppercase text-32 font-bold">d</span>
        <span
          className={`ssm:transition ssm:duration-500 ${
            props.light ? `text-dark` : `text-white`
          } uppercase text-24 font-bold`}>
          olr
        </span>
      </div>
      <div className="md:w-8/12 flex justify-end md:relative absolute right-8 ssm:fixed">
        <ul
          className={`${
            open ? `menu ${isOpen}` : "ssm:hidden"
          } md:flex justify-between items-end w-full ssm:flex-col md:flex-row`}>
          <li
            className={`${listClass} ${
              props.light
                ? `${props.section === "about" ? "text-main" : "text-dark"}`
                : `${props.section === "about" ? "text-main" : "text-white"}`
            }`}
            onClick={() => props.setSection.setSection("about")}>
            about
          </li>
          <li
            className={`${listClass} ${
              props.light
                ? `${props.section === "projects" ? "text-main" : "text-dark"}`
                : `${props.section === "projects" ? "text-main" : "text-white"}`
            }`}
            onClick={() => props.setSection.setSection("projects")}>
            projects
          </li>
          <li
            className={`${listClass} ${
              props.light
                ? `${props.section === "skills" ? "text-main" : "text-dark"}`
                : `${props.section === "skills" ? "text-main" : "text-white"}`
            }`}
            onClick={() => props.setSection.setSection("skills")}>
            skills
          </li>
          <li
            className={`${listClass} ${
              props.light
                ? `${
                    props.section === "experience" ? "text-main" : "text-dark"
                  }`
                : `${
                    props.section === "experience" ? "text-main" : "text-white"
                  }`
            }`}
            onClick={() => props.setSection.setSection("experience")}>
            experience
          </li>
          <li
            className={`${listClass} ${
              props.light
                ? `${props.section === "education" ? "text-main" : "text-dark"}`
                : `${
                    props.section === "education" ? "text-main" : "text-white"
                  }`
            }`}
            onClick={() => props.setSection.setSection("education")}>
            education
          </li>
          <li
            className={`${listClass} ${
              props.light
                ? `${props.section === "contact" ? "text-main" : "text-dark"}`
                : `${props.section === "contact" ? "text-main" : "text-white"}`
            }`}
            onClick={() => props.setSection.setSection("contact")}>
            contact
          </li>
        </ul>
        <div className="w-1">
          <button
            className={`outline-node cursor-pointer px-2 py-0 ssm:py-2 md:mx-2 relative flex items-center`}
            onClick={() => props.setLight(!props.light)}>
            {props.light ? <Dark /> : <Light />}
          </button>
        </div>
      </div>
      {/* <div className="md:hidden">
        <button
          className={`relative group flex items-center outline-none burger w-10 h-10 ${isOpen}`}
          onClick={() => setOpen(!open)}>
          <div className="relative flex items-center justify-center w-5 h-5 transform transition-all bg-none duration-200">
            <div
              className={`flex col justify-between w-[15px] h-[15px] transform transition-all duration-300 ${
                open ? `group-focus:-ratate-[45deg] origin-center` : ``
              }`}>
              <div
                className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                  open
                    ? `bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px] ${open}`
                    : ""
                }`}></div>
              <div
                className={`h-[1px] rounded ${
                  open ? `bg-white` : `bg-white`
                }`}></div>
              <div
                className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                  open
                    ? "bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"
                    : ""
                }`}></div>
            </div>
          </div>
        </button>
      </div> */}
    </div>
  );
}

export default NavBar;
