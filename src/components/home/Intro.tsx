import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Intro() {
  const InfoSection: React.FC<{ title: string; description: string }> = ({
    title,
    description,
  }) => {
    return (
      <div className="flex items-center">
        <FontAwesomeIcon icon={faCircle} className="mr-4 w-2 text-blue-400" />
        <div className="flex flex-col">
          <h3 className="text-lg font-medium text-white md:text-xl">{title}</h3>
          <p className="text-xs font-light text-gray-400 md:text-sm">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-indigo-900 p-4 py-12">
      <div className="flex max-w-2xl flex-col items-center px-4 md:max-w-3xl lg:max-w-4xl">
        <h1 className="mb-2 text-center text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:mb-6">
          Introducing JACoB -{" "}
          <p>
            AI That Codes <span className="text-pink">Like You Do</span>
          </p>
        </h1>
        <p className="text-center text-sm font-light text-gray-400 sm:text-base md:text-lg">
          Accelerate your coding without changing your process
        </p>
      </div>
      <div className="mt-6 flex w-full flex-wrap justify-center px-4 sm:mt-10  md:mt-12 ">
        <div className="mr-8 flex w-full flex-col space-y-10 md:mr-4 md:w-1/2 lg:mr-8 lg:w-1/3">
          <InfoSection
            title="Streamlined Workflow"
            description="Integrates with your existing GitHub repos and Figma designs; no need for new tools or
            platforms."
          />
          <InfoSection
            title="Customizable Production Code"
            description="Not just another coding demo. JACoB maps your codebase and learns your coding patterns for consistent, high-quality output for real use cases."
          />
          <InfoSection
            title="Smart Collaboration"
            description="Reviews and contributes to your codebase safely, using your existing trusted code review process."
          />
          <InfoSection
            title="Safe and Secure"
            description="Use our secure hosted platform to run JACoB in virtualized containers via a secure GitHub app. No more worries about an AI running rm -rf / on your local machine!"
          />
        </div>
        <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2 lg:w-1/3">
          <img
            src="images/workflow.svg"
            alt="Workflow Diagram"
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Intro;
