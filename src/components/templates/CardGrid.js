import React from "react";
import { ProjectCard } from "../organismes";
import Slider from "react-slick";

function CardGrid() {
  const myArr = [1, 2, 3, 4, 5];
  const settings = {
    dots: true,
    Infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: false,
    // prevArrow: false,
    useTransform: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="w-[10%] border-main border-8">
      <Slider {...settings} className="border-dark border-8 w-[10%]">
        {myArr.map((i, index) => (
          <div className="flex gap-4 w-full" key={index}>
            <div className="bg-white shadow-lg animate-pulse h-[448px] rounded-5">
              <div className="flex justify-center items-center h-[366px] bg-gray-300 rounded-5"></div>
              <div className="flex flex-col justify-center items-start gap-4 p-4">
                <div className="h-[21px] bg-gray-300 w-full mb-2"></div>
                <div className="h-[21px] bg-gray-300 w-8"></div>
              </div>
            </div>
          </div>
        ))}
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </Slider>
    </div>
  );
}

export default CardGrid;
