import React, { useState } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isSelected: boolean;
}

const ImageButton: React.FC<ButtonProps> = ({ text, onClick, isSelected }) => (
  <div
    className={`cursor-pointer rounded-xl border ${
      isSelected
        ? "border-blue-700 bg-blue-500 shadow"
        : "border-blue-200 bg-light-blue/20"
    } p-4 hover:shadow-lg`}
    onClick={onClick}
  >
    <p
      className={`text-lg font-medium uppercase md:text-xl ${isSelected ? "text-white" : "text-blue-500"}`}
    >
      {text}
    </p>
  </div>
);

const CodeInAction = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const imageUrls = [
    "/images/example-issue.png",
    "/images/status-updates.png",
    "/images/pull-request.png",
  ];

  return (
    <div className="w-full bg-white py-20">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:items-start md:text-left lg:space-y-8">
          <h1 className="text-3xl font-bold text-dark-blue sm:text-4xl lg:text-6xl">
            See JACoB’s Code <span className="text-pink">in Action</span>
          </h1>
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-8">
            <p className="text-base font-light text-gray-600 sm:text-lg lg:text-lg">
              Real Examples. Real Projects. Real Impact.
            </p>
            <p className="sm:text-md max-w-prose pl-24 text-sm font-light text-dark-blue lg:text-sm">
              JACoB isn’t about hypotheticals; it’s about real-world
              application. Here are some examples of how JACoB translates
              development challenges into clean, efficient, and robust code
              solutions.
            </p>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-between md:flex-row">
          <div className="mx-auto space-y-4 md:mx-2 md:w-1/2 md:space-y-6 lg:space-y-8">
            <div className="flex flex-col space-y-2">
              <ImageButton
                text="New issue Created"
                onClick={() => setSelectedImage(0)}
                isSelected={selectedImage === 0}
              />
              <ImageButton
                text="JACoB Status Updates"
                onClick={() => setSelectedImage(1)}
                isSelected={selectedImage === 1}
              />
              <ImageButton
                text="Pull Request Review"
                onClick={() => setSelectedImage(2)}
                isSelected={selectedImage === 2}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col space-y-4 md:ml-12 md:mt-0 md:w-1/2 md:space-y-6 lg:space-y-8">
            <img
              src={imageUrls[selectedImage]}
              alt="Screenshot"
              className="border-orange-200 rounded-xl border"
            />
          </div>
        </div>
        <button
          className="mt-8 rounded-full bg-blue-500 px-6 py-2 shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 sm:px-8"
          onClick={() =>
            window.open(
              "https://github.com/PioneerSquareLabs/jacb-ai-website",
              "_blank",
            )
          }
        >
          <p className="text-center text-lg font-medium uppercase text-white">
            Explore JACoB’s Code Repositories
          </p>
        </button>
      </div>
    </div>
  );
};

export default CodeInAction;
