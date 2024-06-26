import React from "react";
import ProfileImg from "../../assets/Profile.JPG";
import { Img } from "react-image";

function HeroHeader(props) {
  return (
    <div className="relative flex sm:flex-row ssm:flex-col justify-center items-center md:gap-40 ssm:gap-20 h-[80vh]">
      <div className="sm:w-48 ssm:w-36 animate">
        <Img
          src={ProfileImg}
          alt="profile_img"
          className="w-auto rounded-full"
        />
      </div>
      <div
        className={`${
          props.light ? "text-dark" : "text-white"
        } uppercase text-center animate`}>
        <h2 className="md:text-24 ssm:text-18 mb-3">larif douaa</h2>
        <h1 className="md:text-28 ssm:text-24">full stack developer</h1>
      </div>
    </div>
  );
}

export default HeroHeader;
