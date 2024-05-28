import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1800px] flex-col px-4 py-8 pt-20 sm:px-6 md:flex-row md:py-24 lg:px-8">
      <div className="flex w-full flex-col justify-center px-4 sm:px-0 md:w-3/5 md:pr-24">
        <h1 className="text-secondary text-3xl font-semibold text-dark-blue sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Meet JACoB: The Open Source AI Coding Agent
        </h1>
        <p className="mt-4 text-lg font-light text-gray-700">
          JACoB (Just Another Coding Bot) is the open source, AI-powered coding
          agent that extends your capabilities in writing, reviewing, and
          integrating production-level code. JACoB maintains your team's coding
          standards to enhance your workflow and accelerate software
          development, freeing you to focus on big-picture projects.
        </p>

        <Link href="/signup" className="button-primary mt-10 text-white">
          Get Started
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
      <div className="mt-8 hidden w-full items-center justify-center overflow-hidden md:mt-0 md:flex md:w-3/5">
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
      <div className="mt-8 flex w-full items-center justify-center overflow-hidden md:mt-0 md:hidden md:w-3/5">
        <div className="aspect-ratio-box relative h-0 w-full">
          <iframe
            className="absolute left-0 top-0 z-10 h-full w-full"
            src="https://www.youtube.com/embed/08fu8TLKAlI?si=x8vXW-ZiHYzUImEk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;