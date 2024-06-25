import React, { useState } from "react";
import { ReactComponent as Dark } from "../../assets/moon-svgrepo-com.svg";
import { ReactComponent as Light } from "../../assets/sun-svgrepo-com.svg";

function NavBar(props) {
  let [open, setOpen] = useState(false);

  const isOpen = open ? "open" : "";

  let links = [
    { name: "about", link: "/" },
    { name: "projects", link: "/projects" },
    { name: "skills", link: "/skills" },
    { name: "experience", link: "/experience" },
    { name: "education", link: "/education" },
    { name: "contact", link: "/contact" },
  ];

  const listClass =
    "cursor-pointer uppercase px-2 py-0 ssm:py-2 md:mx-2 relative lg:text-16 hover:text-main sm:text-12 flex items-center ssm:transition ssm:duration-500 ssm:ease-in-out ssm:hover:-translate-x-4 md:hover:-translate-y-1 md:hover:-translate-x-0 ssm:hover:-translate-y-0";

  return (
    <div className="md:flex md:justify-between md:items-center w-full relative ssm:flex ssm:justify-between ssm:items-center">
      <div className="flex items-end">
        <span className="text-main uppercase text-32 font-bold">d</span>
        <span
          className={`ssm:transition ssm:duration-500 ${
            props.light ? `text-dark` : `text-white`
          } uppercase text-24 font-bold`}>
          olr
        </span>
      </div>
      <div className="md:w-8/12 flex justify-end md:relative absolute ssm:fixed ssm:flex ssm:justify-end">
        <ul
          className={`${
            open ? `menu ${isOpen}` : "ssm:hidden"
          } md:flex md:pr-0 md:justify-around md:flex-row w-full ssm:z-1 z-[1] capitalize ssm:flex ssm:flex-col ssm:items-end md:static ssm:pr-8 transition-all duration-100 ease-in ssm:opacity-100 opacity-0`}>
          {links.map((link, index) => (
            <li
              key={index}
              className="ssm:pt-2.5 md:pt-0"
              onClick={() => props.setSection.setSection(link.name)}>
              <a
                href={`#${link.name}`}
                style={{ animationDelay: `0.${index + 1}s` }}
                className={`${listClass} ${
                  props.light
                    ? `${
                        props.section === `${link.name}`
                          ? "text-main"
                          : "text-dark"
                      }`
                    : `${
                        props.section === `${link.name}`
                          ? "text-main"
                          : "text-white"
                      }`
                } ${open ? `appear text-white opacity-1` : ""}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="relative w-fit md:block ssm:hidden">
          <button
            className={`outline-node cursor-pointer px-2 py-0 ssm:py-2 md:mx-2 relative flex items-center`}
            onClick={() => props.setLight(!props.light)}>
            {props.light ? <Dark /> : <Light />}
          </button>
        </div>
      </div>
      <div className="md:hidden flex justify-around items-center md:gap-2 w-max ssm:gap-2 ssm:right-8">
        <div className="relative w-fit">
          <button
            className={`outline-node cursor-pointer px-2 py-0 ssm:py-2 md:mx-2 relative flex items-center`}
            onClick={() => props.setLight(!props.light)}>
            {props.light ? <Dark /> : <Light />}
          </button>
        </div>
        <div className="md:hidden">
          <button
            className={`relative group flex items-center outline-none burger w-10 h-10 ${isOpen}`}
            onClick={() => setOpen(!open)}>
            <div
              className={`relative flex items-center justify-center w-5 h-5 transform transition-all bg-none duration-200`}>
              <div
                className={`flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 ${
                  open ? "group-focus:-rotate-[45deg] origin-center" : ""
                }`}>
                <div
                  className={`${
                    props.light ? `bg-dark` : `bg-white`
                  } h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                    open
                      ? `
                        bg-white
                      group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px] ${open}`
                      : ""
                  }`}></div>
                <div
                  className={`h-[1px] rounded  ${open ? `bg-white` : ``}
                    ${props.light ? `bg-dark` : `bg-white`}
                  `}></div>
                <div
                  className={`${
                    props.light ? `bg-dark` : `bg-white`
                  } h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                    open
                      ? "bg-white group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"
                      : ""
                  }`}></div>
              </div>
            </div>
          </button>
          <div className={`background ${isOpen}`}></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
