import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCodeBranch, faEye, faTools } from '@fortawesome/free-solid-svg-icons';

const WhyJacob = () => {
  // Event handlers can be added here if needed
  // For example: const handleButtonClick = () => { /* ... */ };

  return (
    <div className="bg-indigo-900 w-full min-h-screen flex flex-col items-center text-white py-24">
      <div className="max-w-7xl w-full px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-6xl font-bold text-white inline-block mr-4">Why</h1>
          <h1 className="text-6xl font-bold text-pink-500 inline-block">JACoB</h1>
          <h2 className="text-6xl font-bold text-white">Stands Apart</h2>
          <p className="text-lg font-light text-white opacity-50 mt-4">
            Beyond Autocompletion - Full-Spectrum Coding Assistance
          </p>
        </div>
        <p className="text-md font-light text-white max-w-xl mx-auto text-center">
          While tools like GitHub CoPilot suggest snippets, JACoB delivers complete development tasks. It's not just about the lines of code; it's about contributing meaningfully to your project as a whole.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full mt-16 px-4">
        <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center w-full sm:w-auto">
          <FontAwesomeIcon icon={faCheckCircle} className="text-pink-500 w-8 h-8 mb-6" />
          <h3 className="text-xl font-semibold mb-4">End-to-End Task Management</h3>
          <p className="text-sm font-light text-white opacity-50 text-center">
            JACoB doesn't stop at suggestions; it takes on tasks from start to finish, including writing, reviewing, and testing.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center w-full sm:w-auto">
          <FontAwesomeIcon icon={faCodeBranch} className="text-yellow-400 w-8 h-8 mb-6" />
          <h3 className="text-xl font-semibold mb-4">Open Source and Extensible</h3>
          <p className="text-sm font-light text-white opacity-50 text-center">
            JACoB's open-source nature means you can see under the hood and adapt it to your exact needs.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center w-full sm:w-auto">
          <FontAwesomeIcon icon={faEye} className="text-blue-400 w-8 h-8 mb-6" />
          <h3 className="text-xl font-semibold mb-4">Full Codebase View</h3>
          <p className="text-sm font-light text-white opacity-50 text-center">
            JACoB understands every part of your project, not just the file you're working on, ensuring a holistic approach to development.
          </p>
        </div>
        <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center w-full sm:w-auto">
          <FontAwesomeIcon icon={faTools} className="text-purple-400 w-8 h-8 mb-6" />
          <h3 className="text-xl font-semibold mb-4">Customizable to Fit Your Workflow</h3>
          <p className="text-sm font-light text-white opacity-50 text-center">
            With JACoB, you set the rules. Configure everything in a YAML file right in your codebase, and JACoB follows suit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJacob;