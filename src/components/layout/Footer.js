import React from "react";
import { ReactComponent as LinkedInWhite } from "../../assets/linkedin-white-svgrepo-com.svg";
import { ReactComponent as LinkedInDark } from "../../assets/linkedin-dark-svgrepo-com.svg";
import { ReactComponent as ResumeWhite } from "../../assets/resume-4-white-svgrepo-com.svg";
import { ReactComponent as ResumeDark } from "../../assets/resume-4-dark-svgrepo-com.svg";
import { ReactComponent as GitHubDark } from "../../assets/github-142-black-svgrepo-com.svg";
import { ReactComponent as GitHubWhite } from "../../assets/github-142-white-svgrepo-com.svg";
import MyResume from "file:///C:/Users/Youcode/Documents/CV/Leatest%20CV%20-%20Presentation%20-%20Motivation%20Letter/Douaa%20larif%20-%20Resume%20Court.pdf";

function Footer(props) {
  return (
    <div
      className={`p-8 flex justify-center items-center border-t-1 ${
        props.light ? `text-dark border-dark` : `text-white border-white`
      }`}
      id="footer">
      <div className="w-10/12 flex justify-between items-center">
        <div className="flex md:text-14 ssm:text-12 items-end gap-1 uppercase w-full">
          <span>© douaa larif</span>
          <span>2024</span>
        </div>
        <div className="flex justify-end w-full">
          <div
            className={`${
              props.light ? `text-dark` : `text-white`
            } flex items-center gap-4`}>
            <a
              href="https://www.linkedin.com/in/douaa-larif-07279a20b/"
              className="w-full">
              {props.light ? <LinkedInDark /> : <LinkedInWhite />}
            </a>
            <a href="https://github.com/Douaa19" className="w-full">
              {props.light ? <GitHubWhite /> : <GitHubDark />}
            </a>
            <a href={MyResume} download className="w-full">
              {props.light ? <ResumeDark /> : <ResumeWhite />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
