import React from "react";
import ProfileImg from "../../assets/Profile.JPG";

function HeroHeader() {
  return (
    <div className="flex justify-center items-center gap-40 my-4 translate-y-36">
      <div className="w-24 animate">
        <img
          src={ProfileImg}
          alt="profile_img"
          className="w-auto rounded-full"
        />
      </div>
      <div className="text-white uppercase text-center animate">
        <h2 className="text-24 mb-3">larif douaa</h2>
        <h1 className="text-28">full stack developer</h1>
      </div>
    </div>
  );
}

export default HeroHeader;
