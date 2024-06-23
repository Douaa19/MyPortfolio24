import React from "react";

function About(props) {
  return (
    <div
      className={`pb-4 flex flex-col justify-center items-start w-11/12`}
      id="about">
      <div className="md:mb-4 ssm:mb-4">
        <h2
          className={`uppercase md:text-28 ssm:text-24 font-bold ${
            props.light ? `text-dark` : `text-white`
          }`}>
          about
        </h2>
      </div>
      <div className="">
        <p className={`${props.light ? `text-dark` : `text-white`} px-4`}>
          Welcome to my portfolio! As a web developer
          with a passion for crafting dynamic and user-friendly websites.
        </p>
      </div>
    </div>
  );
}

export default About;
