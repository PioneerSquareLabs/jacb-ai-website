import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  const handleJoinWaitlistClick = () => {
    // Implement the logic to join the waitlist
    console.log('Join waitlist button clicked');
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 flex flex-col justify-center p-8 space-y-6">
        <h1 className="text-6xl font-bold text-indigo-900">Meet JACoB: Your AI Coding Partner</h1>
        <p className="text-lg text-indigo-300">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="bg-blue-500 text-white rounded-md shadow-lg shadow-purple-500/50 px-6 py-2 flex items-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          onClick={handleJoinWaitlistClick}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
      <div className="flex-1 bg-pink-100 rounded-xl md:max-w-lg mx-auto mt-8 md:mt-0 overflow-hidden">
        <img src="/video.png" alt="Demo video" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default HeroSection;