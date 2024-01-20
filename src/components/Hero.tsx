import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const [isJoiningWaitlist, setIsJoiningWaitlist] = useState(false);

  const handleJoinWaitlist = () => {
    // Placeholder for actual implementation
    setIsJoiningWaitlist(true);
    // Here you would typically handle the logic to join the waitlist, such as making an API call
  };

  return (
    <div className="relative bg-white w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 right-0 w-full max-w-md h-full bg-peach rounded-3xl flex items-center justify-center">
        <p className="text-3xl font-medium text-black text-opacity-20">
          Demo video
        </p>
      </div>
      <div className="z-10 max-w-xl">
        <h1 className="text-7xl text-primary font-bold mb-6">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="text-lg font-light text-secondary mb-8">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleJoinWaitlist}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;