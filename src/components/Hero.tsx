import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PopupButton } from "@typeform/embed-react";

const HeroSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-col px-4 py-8 pt-20 sm:px-6 md:flex-row md:py-24 lg:px-8">
      <div className="flex w-full flex-col justify-center px-4 sm:px-0 md:w-3/5 md:pr-24">
        <h1 className="text-secondary text-3xl font-semibold text-dark-blue sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Meet JACoB: Your AI Coding Partner
        </h1>
        <p className="mt-4 text-lg font-light text-gray-700">
          JACoB (Just Another Coding Bot) is the AI-powered coding assistant
          that turns your designs into deployable code, understands your
          codebase, and collaborates via your existing GitHub workflow
        </p>
        <PopupButton
          id={"DSxrFcdl"}
          className="button-primary mt-6"
          medium="jacob-waitlist"
        >
          <span className="text-md text-white sm:text-lg">
            Join the Waitlist for Early Access
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-white" />
        </PopupButton>
      </div>
      <div className="mt-8 flex w-full items-center justify-center overflow-hidden md:mt-0 md:w-3/5">
        <div className="aspect-ratio-box relative h-0 w-full">
          <video
            autoPlay
            muted
            loop
            className="absolute left-0 top-0 z-10 h-full w-full rounded-lg border-x-4 border-y-8  border-black object-cover"
          >
            <source src="/videos/overview-small.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
