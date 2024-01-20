import React from "react";

function Intro() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-indigo-900 p-4 py-12">
      <div className="flex max-w-2xl flex-col items-center">
        <h1 className="mb-6 text-center text-5xl font-bold leading-tight text-white">
          Introducing JACoB -{" "}
          <p>
            AI That Codes <span className="text-pink">Like You Do</span>
          </p>
        </h1>
        <p className="mt-4 text-center text-lg font-light text-gray-400">
          Simplify your coding without changing your process
        </p>
      </div>
      <div className="mt-20 flex max-w-7xl flex-wrap justify-center">
        <div className="mr-8 flex flex-col space-y-10">
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-blue-400"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">
                Adaptive AI Coding
              </h3>
              <p className="text-sm font-light text-gray-400">
                JACoB learns your coding patterns for consistent, high-quality
                output.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-blue-400"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">
                Streamlined Workflow
              </h3>
              <p className="text-sm font-light text-gray-400">
                Integrates with your existing setup; no need for new tools or
                platforms.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-blue-400"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">
                Smart Collaboration
              </h3>
              <p className="text-sm font-light text-gray-400">
                Reviews and contributes to your codebase as an insightful team
                player.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-4 h-3 w-3 rounded-full bg-blue-400"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">
                Continuous Learning
              </h3>
              <p className="text-sm font-light text-gray-400">
                Evolves with your projects to provide relevant, efficient coding
                support.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img src="images/workflow.png" alt="Workflow Diagram" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
