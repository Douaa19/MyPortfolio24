import React from "react";
import { ReactComponent as TailwindCSSWhite } from "../../assets/tailwind-white-svgrepo-com.svg";
import { ReactComponent as TailwindCSSDark } from "../../assets/tailwind-dark-svgrepo-com.svg";
import { ReactComponent as MongoDBWhite } from "../../assets/mongodb-white-svgrepo-com.svg";
import { ReactComponent as MongoDBDark } from "../../assets/mongodb-dark-svgrepo-com.svg";
import { ReactComponent as MySQLWhite } from "../../assets/mysql-white-svgrepo-com.svg";
import { ReactComponent as MySQLDark } from "../../assets/mysql-dark-svgrepo-com.svg";
import { ReactComponent as ExpressDark } from "../../assets/icons8-express-dark-js.svg";
import { ReactComponent as ExpressWhite } from "../../assets/icons8-express-white-js.svg";
import { ReactComponent as PostmanDark } from "../../assets/postman-dark-icon-svgrepo-com.svg";
import { ReactComponent as PostmanWhite } from "../../assets/postman-white-icon-svgrepo-com.svg";
function Skills(props) {
  return (
    <div className={`pb-8 flex justify-center items-center`} id="skills">
      <div className="w-10/12">
        <div className="mb-6">
          <h2
            className={`uppercase md:text-28 ssm:text-24 font-bold w-full tracking-wide ${
              props.light ? `text-dark` : `text-white`
            }`}>
            Skills
          </h2>
        </div>
        <div className="w-full px-4">
          <ul className="flex flex-wrap justify-center items-center w-full gap-4">
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-html5 text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  HTML
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-css3 text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  CSS
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-sass text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Saa
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                {props.light ? <TailwindCSSDark /> : <TailwindCSSWhite />}
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Tailwind css
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-js text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  JavaScript
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-php text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  PHP
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-node text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Node js
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                {props.light ? <ExpressDark /> : <ExpressWhite />}
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Express js
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-react text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  React js
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                <i
                  className={`fab fa-vuejs text-32 ${
                    props.light ? `text-dark` : `text-white`
                  }`}></i>
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Vue js
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                {props.light ? <MySQLWhite /> : <MySQLDark />}
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  MySQL
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                {props.light ? <MongoDBDark /> : <MongoDBWhite />}
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  MongoDB
                </span>
              </div>
            </li>
            <li
              className={`tech-icon mr-4 mb-4 flex flex-col items-center justify-center text-center gap-1 p-1 rounded-md`}>
              <div
                className={`inner rounded-md flex flex-col items-center justify-center w-full p-4 ${
                  props.light ? `bg-gray-50` : `bg-dark`
                }`}>
                {props.light ? <PostmanWhite /> : <PostmanDark />}
                <span
                  className={`${
                    props.light ? `text-dark` : `text-white`
                  } md:text-16 ssm:text-12`}>
                  Postman
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
