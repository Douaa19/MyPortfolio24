import React from "react";
import ProjectImg from "../../assets/eren-yildiz-g6Wd6MS8lms-unsplash.jpg";

function ProjectCard() {
  return (
    <div className="border border-white text-white rounded-md">
      <div className="">
        <img src={ProjectImg} alt="" className="rounded-t-md" />
        <div className="flex flex-col gap-2 p-3">
          <h2 className="uppercase text-16 font-bold">Project Title</h2>
          <h3 className="uppercase text-16">Full Stack</h3>
          <div className="uppercase flex gap-2 flex-wrap text-14">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Node js</span>
            <span>PHP</span>
            <span>MySQL</span>
          </div>
          <p className="text-14">
            The project is an e-commerce web site for peopel who loves sports.
          </p>
          <a href="/" className="hover:text-main">
            https://link-to-the-project.io
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
