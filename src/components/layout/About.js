import React from "react";

function About(props) {
  return (
    <div className={`pb-8 flex justify-center items-center w-full`} id="about">
      <div className="flex flex-col justify-center items-start w-10/12">
        <div className="md:mb-4 ssm:mb-4">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold ${
              props.light ? `text-dark` : `text-white`
            }`}>
            about
          </h2>
        </div>
        <div className="w-full flex justify-center items-center">
          <div
            className={`${
              props.light ? `text-dark` : `text-white`
            } md:w-2/3 ssm:w-full px-4 md:text-16 ssm:text-12 flex flex-col gap-3 text-justify`}>
            <p>
              Welcome to my portfolio! As a web developer with a passion for
              crafting dynamic and user-friendly websites. With strong
              foundation in both front-end and back-end development. I bring
              ideas to life through clean, efficient, and scalable code. I
              specialize in creating seamless digital experiences that meet the
              unique needs of each project.
            </p>
            <p>
              Through my experience, I have honed my skills in HTML, CSS,
              JavaScript, and various frameworks like React js and Next js, along
              with back-end technologies such as Node js and PHP. Always staying
              up-to-date with the latest trends and best practices.
            </p>
            <p>
              My passion is to create digital products that are not only
              visually stunning but also intuitive, accessible, and
              user-friendly.
            </p>
            <p>
              Feel free to explore my portfolio, and let's connect to discuss
              how I can help bring your vision to the web. I'm always looking
              for new opportunities to collaborate and grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
