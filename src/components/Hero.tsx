import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const handleWaitlistClick = () => {
    // Implement waitlist click functionality here
    console.log('Join the waitlist button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="flex-1 flex flex-col justify-center p-8 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-900">Meet JACoB: Your AI Coding Partner</h1>
        <p className="text-lg text-indigo-600">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-150 ease-in-out"
          onClick={handleWaitlistClick}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="flex-1 bg-pink-100 rounded-xl md:max-w-lg mx-4 md:mx-0 mt-8 md:mt-0 overflow-hidden">
        <img src="video.png" alt="Demo video" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;