import React from "react";
import { ProjectCard } from "../organismes";
import Slider from "react-slick";
import { ReactComponent as Next } from "../../assets/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/arrow-prev-small-svgrepo-com.svg";

function CardGrid(props) {
  const myArr = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    // useTransform: true,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 800,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    // ],
  };

  return (
    <div className="w-[90%]">
      <div class="flex items-center justify-center">
        <div class="container mx-auto p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {props.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                post={project.post}
                technologies={project.technologies}
                description={project.description}
                link={project.link}
                light={props.light}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
