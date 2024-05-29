import React from 'react';

interface InfoBoxProps {
  title: string;
  description: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ title, description }) => (
  <div className="flex flex-col items-start w-full max-w-xl p-4 bg-dark-beige border border-solid border-[#e9dad7] rounded-lg mb-4">
    <h2 className="text-xl font-medium text-dark-blue">{title}</h2>
    <p className="text-base font-light text-[#61668b] mt-2">{description}</p>
  </div>
);

function DesignedForDevs() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-start w-full max-w-7xl">
        <div className="flex flex-col items-start w-full max-w-2xl mb-8">
          <div className="flex flex-col items-start w-full">
            <div className="flex flex-col items-start w-full">
              <h1 className="text-6xl text-dark-blue">Designed for</h1>
              <div className="flex items-center">
                <h1 className="text-6xl text-dark-blue text-center">Developers</h1>
                <h1 className="text-6xl text-dark-blue text-center">,</h1>
              </div>
              <h1 className="text-6xl text-dark-blue">Tailored for Teams</h1>
            </div>
            <p className="text-lg font-light text-[#61668b] mt-4">
              JACoB is built from the ground up to address the specific needs of software development.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full max-w-7xl">
          <InfoBox title="Efficiency Boost" description="ACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving." />
          <InfoBox title="Quality Assurance" description="With JACoB's AI-driven reviews, your code stays clean and maintainable." />
          <InfoBox title="Rapid Integration" description="JACoB fits into your workflow from day one, adapting to your tools and preferences." />
          <InfoBox title="Scalable Development" description="Handle more projects and complex code without expanding your team." />
          <InfoBox title="Learning & Growth" description="JACoB continuously learns from your codebase, contributing more effectively over time." />
          <InfoBox title="Security & Control" description="Hosted within your environment, JACoB ensures your code remains secure and proprietary." />
        </div>
      </div>
    </div>
  );
}

export default DesignedForDevs;