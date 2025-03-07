import React from "react";

function ProjectCard({
  title,
  post,
  technologies,
  description,
  link,
  img,
  light,
  transition,
}) {
  return (
    <div
      class={`rounded-md border opacity-img hover:cursor-pointer transition-all h-[520px] ${
        light ? `text-dark` : `text-white`
      } hover:shadow-md hover:-translate-y-1 transition duration-500 ease-in-out mx-4 my-2`}
      onClick={() => {
        if (link.length > 1) {
          window.open(link, "_blank");
        } else {
          window.location = "/";
        }
      }}>
      <img
        src={img}
        alt="project-img"
        class="w-full relative h-52 rounded-t-md object-contain"
      />
      <div class="p-4 flex flex-col gap-2">
        <h2 className="uppercase md:text-24 ssm:text-14 font-bold my-2">
          {title}
        </h2>
        <h3 className="uppercase md:text-16 ssm:text-12">{post}</h3>
        <div className="flex flex-wrap flex-row">
          {technologies.map((techno, index) => (
            <span
              className={`${
                light ? `text-dark` : `text-white`
              } md:text-16 ssm:text-12 mr-1`}
              key={index}>
              {techno},
            </span>
          ))}
        </div>
        <p class="md:text-14 ssm:text-12">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
