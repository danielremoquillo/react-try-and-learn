import React from "react";
import FacebookIcon from "../assets/facebook.svg?react";
import GithubIcon from "../assets/github.svg?react";
import LinkedInIcon from "../assets/linkedin.svg?react";

const Header = ({ projectName, projectTitle }) => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-primary">
          {projectTitle}
        </h1>
        <span className="text-md md:text-lg font-medium text-primary-50">
          {projectName}
        </span>
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-evenly ">
          <a
            href="https://www.facebook.com/danielremoquillo.dev"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <FacebookIcon className="w-6 h-6 fill-primary" />
          </a>
          <a
            href="https://github.com/danielremoquillo"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <GithubIcon className="w-6 h-6 fill-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/danielremoquillo-dev/"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
          >
            <LinkedInIcon className="w-6 h-6 fill-primary" />
          </a>
        </div>
      </div>
    </header>
  );
};

const TodoApp = ({ projectName, projectTitle, children }) => {
  return (
    <div className="h-screen flex flex-col justify-start items-center py-12">
      <div className="flex flex-col justify-start max-w-3xl min-w-[28rem] md:min-w-[32rem] lg:min-w-[40rem]">
        <Header projectName={projectName} projectTitle={projectTitle} />
        {children}
      </div>
    </div>
  );
};

export default TodoApp;
