
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleJoinWaitlist = () => {
    // TODO: Implement waitlist signup logic
    console.log('Email submitted for waitlist:', email);
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen flex flex-col justify-center items-center text-white p-4">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-6 py-12 bg-white rounded-lg shadow-xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
        </p>
        <div className="flex justify-center items-center mt-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="ml-2 block w-full px-4 py-2 text-lg bg-gray-100 border-2 border-gray-300 rounded-md placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleJoinWaitlist}
          className="mt-4 px-6 py-2 bg-purple-700 hover:bg-purple-800 rounded-md shadow-lg text-lg font-semibold"
        >
          Join the Waitlist for Early Access
        </button>
      </div>
      <div className="mt-12 max-w-xl text-center">
        <img src="video.png" alt="Demo video" className="mx-auto mb-8" />
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Early Access</h2>
          <p className="text-md text-gray-300">
            Get a head start in experiencing and influencing the future of AI coding.
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Exclusive Updates</h2>
          <p className="text-md text-gray-300">
            Stay informed with the latest developments and updates as JACoB evolves.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Community Influence</h2>
          <p className="text-md text-gray-300">
            Be part of a community that's shaping JACoB to be the best AI coding assistant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;