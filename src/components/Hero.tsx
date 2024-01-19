import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  // Placeholder for the click event handler for the button
  const handleButtonClick = () => {
    // Implement the logic to handle the click event
    console.log('Button clicked for joining the waitlist');
  };

  return (
    <div className="flex w-full h-screen bg-primary">
      {/* Demo Video Placeholder */}
      <div className="flex justify-center items-center w-1/2 h-full bg-white rounded-lg shadow-lg">
        <p className="text-3xl text-center text-gray-400 font-medium">
          Demo video
        </p>
      </div>
      
      {/* Title and Description */}
      <div className="flex flex-col justify-center w-1/2 h-full pl-12">
        <h1 className="text-7xl text-secondary font-semibold">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="mt-4 text-lg text-tertiary font-light">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow
        </p>
        <button
          className="flex items-center justify-center w-56 h-12 mt-6 bg-blue-500 rounded-lg shadow-lg"
          onClick={handleButtonClick}
        >
          <span className="text-lg text-white">
            Join the Waitlist for Early Access
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="text-white ml-2" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;