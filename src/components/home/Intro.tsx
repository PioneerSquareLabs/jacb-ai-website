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
          <p className="text-sm font-light text-gray-400 md:text-base">
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-indigo-900 p-4 py-12">
      <div className="flex max-w-xl flex-col items-center px-4 md:max-w-2xl lg:max-w-3xl">
        <h1 className="mb-2 text-center text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:mb-6">
          Introducing JACoB - Secure{" "}
          <span className="text-pink">Open-Source</span> Coding Agent
        </h1>
        <p className="text-center text-sm font-light text-gray-400 sm:text-base md:text-lg">
          Accelerate your coding without changing your process
        </p>
      </div>
      <div className="mt-6 flex w-full flex-wrap justify-center px-4 sm:mt-10  md:mt-12 ">
        <div className="mr-8 flex w-full flex-col space-y-10 md:mr-4 md:w-1/2 lg:mr-8 lg:w-1/3">
          <InfoSection
            title="Streamline Your Workflow"
            description="JACoB integrates seamlessly with your existing GitHub repos and Figma designs, automating mundane tasks so you can concentrate on innovation."
          />
          <InfoSection
            title="Write Better Code, Faster"
            description="JACoB maps your full codebase, learning your patterns to generate consistent, high-quality code customized to your use cases and standards."
          />
          <InfoSection
            title="Enhance Code Quality"
            description="JACoB intelligently reviews code, proactively identifying bugs, security risks, and areas for improvement - decreasing review time."
          />
          <InfoSection
            title="Secure and Adaptable"
            description="Run JACoB locally or via our secure hosted containers. Being open source, you can also inspect the code and adapt JACoB to your exact needs."
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
