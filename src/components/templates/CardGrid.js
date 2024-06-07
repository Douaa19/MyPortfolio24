import React from "react";
import { ProjectCard } from "../organismes";

function CardGrid() {
  return (
    <div className="flex gap-8">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
}

export default CardGrid;
