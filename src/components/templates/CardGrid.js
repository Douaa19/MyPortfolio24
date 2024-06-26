import React from "react";
import { ProjectCard } from "../organismes";
import Slider from "react-slick";
import { ReactComponent as Next } from "../../assets/arrow-next-small-svgrepo-com.svg";
import { ReactComponent as Prev } from "../../assets/arrow-prev-small-svgrepo-com.svg";

function CardGrid(props) {
  const settings = {
    Infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div class="flex items-center justify-center">
        <div class="container mx-auto p-4">
          <Slider {...settings}>
            {props.projects.map((project, index) => (
              <>
                <ProjectCard
                  key={index}
                  title={project.title}
                  post={project.post}
                  technologies={project.technologies}
                  description={project.description}
                  link={project.link}
                  img={project.img}
                  light={props.light}
                  tansition={false}
                />
              </>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default CardGrid;
