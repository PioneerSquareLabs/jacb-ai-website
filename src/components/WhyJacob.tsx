import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCodeBranch,
  faEye,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const WhyJacob = () => {
  // Event handlers can be added here if needed
  // For example: const handleButtonClick = () => { /* ... */ };

  return (
    <div className="flex  w-full flex-col items-center bg-dark-blue py-12 text-white">
      <div className="w-full max-w-7xl px-4">
        <div className="mb-16 flex flex-row items-center">
          <div className="w-2/5">
            <h1 className="mr-4 inline-block text-6xl font-bold text-white">
              Why <span className=" text-pink">JACoB</span> Stands Apart
            </h1>
            <p className="mt-4 text-lg font-light text-gray-400">
              Beyond Autocompletion - Full-Spectrum Coding Assistance
            </p>
          </div>
          <p className="text-md mx-auto max-w-xl self-end text-right font-light text-white">
            While tools like GitHub CoPilot suggest snippets, JACoB delivers
            complete development tasks. It's not just about the lines of code;
            it's about contributing meaningfully to your project as a whole.
          </p>
        </div>
      </div>
      <div className="mt-16 flex w-full max-w-7xl flex-row justify-center gap-4 px-4">
        <div className="flex w-full flex-col rounded-xl border border-indigo-700 bg-white bg-opacity-10 p-6 sm:w-auto">
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="text-pink-500 mb-6 h-8 w-8"
          />
          <h3 className="mb-4 text-xl font-semibold">
            End-to-End Task Management
          </h3>
          <p className="text text-sm font-light text-white opacity-50">
            JACoB doesn't stop at suggestions; it takes on tasks from start to
            finish, including writing, reviewing, and testing.
          </p>
        </div>
        <div className="flex w-full flex-col  rounded-xl border border-indigo-700 bg-white bg-opacity-10 p-6 sm:w-auto">
          <FontAwesomeIcon
            icon={faCodeBranch}
            className="mb-6 h-8 w-8 text-yellow-400"
          />
          <h3 className="mb-4 text-xl font-semibold">
            Open Source and Extensible
          </h3>
          <p className=" text-sm font-light text-white opacity-50">
            JACoB's open-source nature means you can see under the hood and
            adapt it to your exact needs.
          </p>
        </div>
        <div className="flex w-full flex-col  rounded-xl border border-indigo-700 bg-white bg-opacity-10 p-6 sm:w-auto">
          <FontAwesomeIcon
            icon={faEye}
            className="mb-6 h-8 w-8 text-blue-400"
          />
          <h3 className="mb-4 text-xl font-semibold">Full Codebase View</h3>
          <p className=" text-sm font-light text-white opacity-50">
            JACoB understands every part of your project, not just the file
            you're working on, ensuring a holistic approach to development.
          </p>
        </div>
        <div className="flex w-full flex-col  rounded-xl border border-indigo-700 bg-white bg-opacity-10 p-6 sm:w-auto">
          <FontAwesomeIcon
            icon={faTools}
            className="mb-6 h-8 w-8 text-purple-400"
          />
          <h3 className="mb-4 text-xl font-semibold">
            Customizable to Fit Your Workflow
          </h3>
          <p className="text-sm font-light text-white opacity-50">
            With JACoB, you set the rules. Configure everything in a YAML file
            right in your codebase, and JACoB follows suit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJacob;
