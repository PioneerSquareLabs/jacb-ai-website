
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const handleWaitlistSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder for waitlist signup logic
    console.log('Waitlist signup submitted');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="text-white max-w-xl mx-auto mb-8">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <form onSubmit={handleWaitlistSignup} className="relative text-white max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-t-lg focus:outline-none"
            aria-label="Email for waitlist"
          />
          <button type="submit" className="absolute right-0 top-0 bg-pink-600 rounded-b-lg w-48 h-full flex items-center justify-center font-medium">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            JOIN THE WAITLIST
          </button>
        </form>
      </div>
      <div className="flex justify-between items-center text-white max-w-7xl w-full mt-12 px-4">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-semibold">Early Access</h2>
          <p className="mt-2">
            Get a head start in experiencing and influencing the future of AI coding.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-lg font-semibold">Exclusive Updates</h2>
          <p className="mt-2">
            Stay informed with the latest developments and updates as JACoB evolves.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-right">
          <h2 className="text-lg font-semibold">Community Influence</h2>
          <p className="mt-2">
            Be part of a community that's shaping JACoB to be the best AI coding assistant.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-white max-w-7xl w-full mt-12">
        <div className="w-full md:w-1/2 bg-white rounded-lg p-4">
          <h2 className="text-lg font-semibold text-indigo-900">Demo video</h2>
          {/* Placeholder for the actual demo video */}
          <div className="w-full h-64 bg-gray-300 rounded-lg mt-4 flex items-center justify-center">
            <span className="text-indigo-900">Video Placeholder</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;