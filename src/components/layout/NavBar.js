import React from "react";
import { ReactComponent as MyLogo } from "../../assets/MyLogo1.svg";

function NavBar() {
  const myList = [
    { name: "about", link: "/" },
    { name: "projects", link: "/" },
    { name: "skills", link: "/" },
    { name: "experience", link: "/" },
    { name: "education", link: "/" },
    { name: "contact", link: "/" },
  ];

  return (
    <div className="md:flex md:justify-between md:items-center w-full">
      <div className="flex items-end">
        <span className="text-main uppercase text-32 font-bold">d</span>
        <span className="text-white uppercase text-24 font-bold">olr</span>
      </div>
      <div className="md:w-8/12 flex justify-end md:relative absolute right-8 ssm:fixed md:relative">
        <div className="flex justify-between items-end w-full ssm:flex-col md:flex-row">
          {myList.map((link, index) => (
            <>
              <a
                key={index}
                href={`#${link.link}`}
                className="uppercase px-2 py-0 ssm:py-2 md:mx-2 relative text-white lg:text-16 md:14 hover:text-main sm:text-12 flex items-center ssm:transition ssm:duration-500 ssm:ease-in-out ssm:hover:-translate-x-4 md:hover:-translate-y-1 md:hover:-translate-x-0 ssm:hover:-translate-y-0">
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
