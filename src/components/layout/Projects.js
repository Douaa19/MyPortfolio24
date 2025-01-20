import React from "react";
import CardGrid from "../templates/CardGrid";
import projects from "../../assets/data/projects.json";

function Projects(props) {
  const myProjects = projects;

  return (
    <div className={`pb-8 flex justify-center`} id="projects">
      <div className="w-10/12">
        <div className="mb-6 w-full">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold w-full tracking-wide ${
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
