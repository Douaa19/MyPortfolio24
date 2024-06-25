import React from "react";

function Education(props) {
  return (
    <div
      className={`pb-8 flex justify-center ${
        props.light ? `text-dark` : `text-white`
      }`}
      id="education">
      <div className="w-10/12">
        <div className="md:mb-4 ssm:mb-4 w-full">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold w-full ${
              props.light ? `text-dark` : `text-white`
            }`}>
            Education
          </h2>
        </div>
        <div className="flex justify-between items-start h-[120px] flex-wrap md:gap-2 ssm:gap-2">
          <div
            className={`border ${
              props.light ? `border-dark` : `border-white`
            } p-4 rounded-md min-w-[350px] h-full`}>
            <h3 className="uppercase pb-2">youcode - youssoufia</h3>
            <div className="capitalize flex justify-between items-start">
              <span className="w-1/2">web development</span>
              <span>2020 - 2022</span>
            </div>
          </div>
          <div
            className={`border ${
              props.light ? `border-dark` : `border-white`
            } p-4 rounded-md w-[350px] h-full`}>
            <h3 className="uppercase pb-2">actschool - youssoufia</h3>
            <div className="capitalize flex justify-between items-start">
              <span className="w-1/2">personal development</span>
              <span>2019 - 2020</span>
            </div>
          </div>
          <div
            className={`border ${
              props.light ? `border-dark` : `border-white`
            } p-4 rounded-md w-[350px] h-full`}>
            <h3 className="uppercase pb-2">ista - el jadida</h3>
            <div className="capitalize flex justify-between items-start">
              <span className="w-1/2">
                Technical Specialist in Electromechanics of Automated Systems
              </span>
              <span>2014 - 2016</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
