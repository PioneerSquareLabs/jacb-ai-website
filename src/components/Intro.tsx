import React from 'react';

function Intro() {
  return (
    <div className="bg-indigo-900 w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-white text-center leading-tight mb-6">
          Introducing JACoB - <span className="text-purple-300">AI That Codes Like You Do</span>
        </h1>
        <p className="text-lg font-light text-gray-400 text-center mt-4">
          Simplify your coding without changing your process
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-20 max-w-7xl">
        <div className="flex flex-col space-y-10 mr-8">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">Adaptive AI Coding</h3>
              <p className="text-sm font-light text-gray-400">
                JACoB learns your coding patterns for consistent, high-quality output.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">Streamlined Workflow</h3>
              <p className="text-sm font-light text-gray-400">
                Integrates with your existing setup; no need for new tools or platforms.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">Smart Collaboration</h3>
              <p className="text-sm font-light text-gray-400">
                Reviews and contributes to your codebase as an insightful team player.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-white">Continuous Learning</h3>
              <p className="text-sm font-light text-gray-400">
                Evolves with your projects to provide relevant, efficient coding support.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="/workflow-diagram.png" alt="Workflow Diagram" />
        </div>
      </div>
    </div>
  );
}

export default Intro;