import React from "react";
import ProjectImg from "../../assets/eren-yildiz-g6Wd6MS8lms-unsplash.jpg";

function ProjectCard({
  title,
  post,
  technologies,
  description,
  link,
  light,
  transition,
}) {
  return (
    <div
      class={`rounded-lg border ${light ? `text-dark` : `text-white`} ${
        transition === true ? `card-item` : ``
      } mx-4`}>
      <img
        src={ProjectImg}
        alt="project-img"
        class="w-full h-48 rounded-t-md object-cover"
      />
      <div class="p-4">
        <h2 className="uppercase md:text-18 ssm:text-14 font-bold">
          title: {title}
        </h2>
        <h3 className="uppercase md:text-16 ssm:text-12">role: {post}</h3>
        <div className="flex flex-wrap flex-row gap-2">
          technologies:
          {technologies.map((techno, index) => (
            <span
              className={`${
                light ? `text-dark` : `text-white`
              } md:text-16 ssm:text-12`}
              key={index}>
              {techno}
            </span>
          ))}
        </div>
        <p class="md:text-14 ssm:text-12">description: {description}</p>
        <div className="">
          <a
            href="/"
            className={`hover:text-main md:text-14 ssm:text-12 ${
              light ? `text-dark` : `text-white`
            }`}>
            link: {link}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
