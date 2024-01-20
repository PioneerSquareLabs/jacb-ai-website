import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const handleWaitlistClick = () => {
    // Implement waitlist click functionality here
    console.log('Join the Waitlist button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-white">
      <div className="flex-1 flex flex-col justify-center p-8 space-y-6 md:items-start items-center text-center md:text-left">
        <h1 className="text-5xl font-bold text-indigo-900">Meet JACoB: Your AI Coding Partner</h1>
        <p className="text-lg text-indigo-600">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="inline-flex items-center bg-indigo-600 text-white rounded-full px-6 py-3 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in duration-200"
          onClick={handleWaitlistClick}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="flex-1 max-w-md mx-auto mt-8 md:mt-0">
        <img src="video.png" alt="Demo video" className="rounded-xl shadow-lg" />
      </div>
    </div>
  );
};

export default HeroSection;