import React from "react";

function Introduction() {
  return (
    <div className="w-11/12 h-full flex items-center" id="about">
      <div className="w-full py-4">
        <h1 className="text-main uppercase text-start md:text-24 ssm:text-18 font-bold pb-8">
          introduction
        </h1>
        <div className="text-white md:text-16 ssm:text-12 font-normal text-center">
          <p className="tracking-wider leading-6 pb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            delectus cum deleniti veniam a, cupiditate, odit aperiam aliquid
            magnam nam commodi natus animi quam cumque voluptates mollitia quae.
            Numquam, vel. odit aperiam aliquid magnam nam commodi natus animi
            quam cumque voluptates mollitia quae. Numquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
