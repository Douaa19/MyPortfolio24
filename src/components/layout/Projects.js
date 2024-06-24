import React from "react";
import CardGrid from "../templates/CardGrid";
import projects from "../data/projects.json";

function Projects(props) {
  const myProjects = projects;

  return (
    <div
      className={`pb-8 flex justify-center items-center w-full`}
      id="projects">
      <div className="w-full">
        <div className="md:mb-4 ssm:mb-4">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold ${
              props.light ? `text-dark` : `text-white`
            }`}>
            projects
          </h2>
        </div>
        <CardGrid projects={myProjects} light={props.light} />
      </div>
    </div>
  );
}

export default Projects;
