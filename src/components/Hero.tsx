import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  // Placeholder for the click event handler for the button
  const handleButtonClick = () => {
    // Implement the logic to handle the click event
    console.log("Button clicked for joining the waitlist");
  };

  return (
    <div className="flex w-full max-w-7xl flex-1 py-24">
      <div className="flex h-full w-3/5 flex-col justify-center px-12 pr-24">
        <h1 className="text-secondary text-7xl font-semibold text-dark-blue">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="mt-4 text-lg font-light text-gray-700 ">
          JACoB is the AI-powered coding assistant that turns your designs into
          deployable code, understands your codebase, and collaborates via your
          existing workflow
        </p>
        <button
          className="mt-6 h-12 max-w-lg items-center justify-center rounded-lg bg-navy-blue  shadow-lg"
          onClick={handleButtonClick}
        >
          <span className="text-lg text-white">
            Join the Waitlist for Early Access
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-white" />
        </button>
      </div>
      <div className="flex h-full w-1/2 items-center justify-center rounded-lg bg-white shadow-lg">
        <p className="text-center text-3xl font-medium text-gray-400">
          Demo video
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
