import React from "react";

function Experience(props) {
  return (
    <div className={`pb-8 flex justify-center items-center`} id="experience">
      <div className="w-10/12">
        <div className="md:mb-4 ssm:mb-4">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold w-full ${
              props.light ? `text-dark` : `text-white`
            }`}>
            Experience
          </h2>
        </div>
        <div className="w-full px-4">
            <div className="">
                <h3 className={`uppercase text-lg font-bold ${props.light ? `text-dark` : `text-white`}`}>Software Engineer, <span className="text-orange">Accenture</span></h3>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
