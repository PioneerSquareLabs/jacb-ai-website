import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HeroNew: React.FC = () => {
  const handleDocumentationClick = () => {
    window.location.href = 'https://docs.jacb.ai';
  };

  const handleStartProjectClick = () => {
    window.location.href = 'https://jacb.ai/signup';
  };

  return (
    <div className="w-full min-h-screen bg-dark-beige flex flex-col items-center justify-center">
      <div className="pt-5 text-center">
        <p className="text-xs sm:text-sm text-not-black-black">JACoB is now live. Read our whitepaper <FontAwesomeIcon icon={faPaperPlane} /></p>
      </div>
      <div className="flex flex-col items-center mt-12 px-4">
        <h1 className="text-5xl font-medium text-center leading-tight text-dark-blue">
          The fastest way <br className="hidden lg:inline" /> from design to code
        </h1>
        <p className="mt-5 text-base sm:text-lg font-medium text-center text-gray-500">
          JACoB (Just Another Coding Bot) is the open-source AI coding agent that turns your designs into production-ready code while understanding your codebase and staying in your existing Figma to Github workflow.
        </p>
        <div className="flex flex-wrap justify-center mt-8 gap-4">
          <button
            onClick={handleDocumentationClick}
            className="px-4 py-3 bg-white border border-navy-blue rounded-md shadow-sm text-center text-navy-blue font-medium hover:bg-light-blue hover:text-white transition-colors duration-300"
          >
            See Documentation
          </button>
          <button
            onClick={handleStartProjectClick}
            className="px-4 py-3 bg-navy-blue rounded-md shadow-sm text-center text-white font-medium hover:bg-violet-beauregarde transition-colors duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
      <div className="mt-10 text-center w-full px-4">
        <p className="text-lg text-pink-400">Psssst ... watch how JACoB built this landing page</p>
        <div className="mt-2 w-full max-w-7xl mx-auto p-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-96"
            src="https://www.jacb.ai/videos/overview-small.mp4"
            frameBorder="0"
            allowFullScreen
            title="JACoB Demo Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroNew;