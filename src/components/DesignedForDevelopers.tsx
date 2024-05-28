import { FC } from "react";

const DesignedForDevelopers: FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-start justify-start w-full max-w-7xl">
        <div className="flex flex-col items-start justify-start w-full max-w-lg p-4">
          <div className="text-6xl text-dark-blue">Designed for</div>
          <div className="flex items-center">
            <div className="text-6xl text-center text-dark-blue">Developers</div>
            <div className="text-6xl text-center text-dark-blue">,</div>
          </div>
          <div className="text-6xl text-dark-blue">Tailored for Teams</div>
          <div className="text-lg font-light text-blueGray-500 mt-4">
            JACoB is built from the ground up to address the specific needs of software development.
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-8">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Efficiency Boost</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                ACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Quality Assurance</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                With JACoB's AI-driven reviews, your code stays clean and maintainable.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Rapid Integration</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                JACoB fits into your workflow from day one, adapting to your tools and preferences.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Scalable Development</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                Handle more projects and complex code without expanding your team.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Learning & Growth</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                JACoB continuously learns from your codebase, contributing more effectively over time.
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-dark-beige border border-solid border-[#e9dad7] rounded-lg p-4">
              <div className="text-xl font-medium text-dark-blue">Security & Control</div>
              <div className="text-sm font-light text-blueGray-500 mt-2">
                Hosted within your environment, JACoB ensures your code remains secure and proprietary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedForDevelopers;