import React, { use, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function JacobInMotion() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoUrls = {
    "Live Coding Session":
      "https://www.youtube.com/embed/OfRUaehTcEM?si=Ztt02TwiywbZkSMS",
    "Code Review Process":
      "https://www.youtube.com/embed/j9Yeow-LxT8?si=wqtbVVTOztIMKzVt",
    "Setting up JACoB":
      "https://www.youtube.com/embed/sdLNSL-vFTU?si=MysanCOjnirBDF_J",
  };

  useEffect(() => {
    // set the video url to the first video in the list
    setSelectedVideoUrl(videoUrls["Live Coding Session"]);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPlaying(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleCardClick = (videoUrl: string) => {
    console.log("Card clicked", videoUrl);
    setSelectedVideoUrl(videoUrl);
    setIsPlaying(true);
  };

  interface SessionCardProps {
    title: string;
    description: string;
    videoUrl: string;
  }

  const SessionCard: React.FC<SessionCardProps> = ({
    title,
    description,
    videoUrl,
  }) => {
    const isSelected = selectedVideoUrl === videoUrl;

    return (
      <div
        className={` border-orange-200 w-full cursor-pointer rounded-lg border bg-beige p-4 md:w-1/3 ${isSelected ? "border-navy-blue bg-dark-beige" : ""}`}
        onClick={() => handleCardClick(videoUrl)}
      >
        <h2 className="text-lg font-semibold text-dark-blue sm:text-xl md:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-sm font-light text-gray-600 sm:text-base md:text-lg">
          {description}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-12 flex min-h-screen w-full flex-col items-center justify-center bg-white px-4 pb-12">
      <div className="w-full max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl md:text-5xl lg:text-6xl">
            JACoB <span className="text-pink"> in Motion</span>:
          </h1>
          <h1 className="text-3xl text-dark-blue sm:text-4xl md:text-5xl lg:text-6xl">
            Watch the AI Developer at Work
          </h1>
          <p className="mt-4 text-base font-light text-gray-600 sm:text-lg md:text-xl">
            Experience the seamless integration and coding expertise of JACoB.
          </p>
        </div>
        <div className="mt-16 flex flex-col justify-center gap-4 lg:flex-row">
          <SessionCard
            title="Live Coding Session"
            description="A recorded session showing JACoB writing the code for the jacb.ai site from a design."
            videoUrl={videoUrls["Live Coding Session"]}
          />
          <SessionCard
            title="Code Review Process"
            description="How JACoB reviews a pull request, providing insights and suggestions."
            videoUrl={videoUrls["Code Review Process"]}
          />
          <SessionCard
            title="Setting up JACoB"
            description="A quick walkthrough of how to set up JACoB in your GitHub repo and Figma environment."
            videoUrl={videoUrls["Setting up JACoB"]}
          />
        </div>
        <div className="aspect-ratio-box relative mt-8 h-0 w-full">
          <iframe
            className="absolute left-0 top-0 h-full w-full"
            src={selectedVideoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            // style={{ display: isPlaying ? "block" : "none" }}
          ></iframe>
          {/* <button
            className={`border-pink-500 absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-2 bg-transparent px-3 py-2 shadow-lg backdrop-blur-md ${isPlaying ? "hidden" : ""}`}
            onClick={handlePlayButtonClick}
          >
            <div className="rounded-full bg-pink p-6">
              <FontAwesomeIcon icon={faPlay} className="text-white" size="2x" />
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default JacobInMotion;
