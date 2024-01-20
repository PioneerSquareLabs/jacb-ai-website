import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const handleWaitlistClick = () => {
    // Implement waitlist click event logic here
    console.log('Join the waitlist button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="flex-1 flex flex-col justify-center p-8 space-y-6">
        <h1 className="text-6xl font-bold text-indigo-900">Meet JACoB: Your AI Coding Partner</h1>
        <p className="text-lg text-indigo-600">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 flex items-center transition duration-150 ease-in-out"
          onClick={handleWaitlistClick}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="flex-1 bg-gray-100 rounded-xl md:max-w-lg mx-4 md:mx-0 my-8 md:my-0">
        <div className="text-center p-8">
          <h2 className="text-3xl text-gray-800">Demo video</h2>
          {/* Replace with actual demo video image */}
          <img src="/demo-video-image.png" alt="Demo video" className="mt-4 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;