import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const [isJoining, setIsJoining] = useState(false);

  const handleJoinWaitlist = () => {
    // Placeholder for the actual join waitlist logic
    setIsJoining(true);
    // This would typically involve setting some state or redirecting the user to a sign-up page
  };

  return (
    <div className="relative bg-white min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 lg:left-1/2 w-full lg:w-1/2 h-full bg-peach rounded-r-3xl flex items-center justify-center">
        <img src="/video.png" alt="Demo video" className="w-3/4 h-auto" />
      </div>
      <div className="w-full lg:w-1/2 px-8 lg:px-16">
        <h1 className="text-7xl text-primary font-bold mb-6">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="text-lg text-secondary font-light mb-8">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <button
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 rounded-lg shadow-lg text-lg text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleJoinWaitlist}
        >
          Join the Waitlist for Early Access
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default HeroSection;