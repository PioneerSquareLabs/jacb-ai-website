import React from 'react';

function DesignerForDevs() {
  // Event handlers can be added here if needed
  // Example: const handleButtonClick = () => { /* logic */ };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center px-4 sm:px-24">
        <h1 className="text-6xl font-bold text-indigo-800 leading-none text-center">
          Designed for<br/>Developers,<br/>Tailored for Teams
        </h1>
        <p className="text-lg font-light text-gray-600 mt-4">
          JACoB is built from the ground up to address the specific needs of software development.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-24 mt-8">
        <FeatureCard
          title="Efficiency Boost"
          description="ACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving."
        />
        <FeatureCard
          title="Quality Assurance"
          description="With JACoB's AI-driven reviews, your code stays clean and maintainable."
        />
        <FeatureCard
          title="Rapid Integration"
          description="JACoB fits into your workflow from day one, adapting to your tools and preferences."
        />
        <FeatureCard
          title="Scalable Development"
          description="Handle more projects and complex code without expanding your team."
        />
        <FeatureCard
          title="Learning & Growth"
          description="JACoB continuously learns from your codebase, contributing more effectively over time."
        />
        <FeatureCard
          title="Security & Control"
          description="Hosted within your environment, JACoB ensures your code remains secure and proprietary."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col bg-gray-100 border border-gray-300 rounded-xl p-4 w-full sm:w-1/2 lg:w-1/3">
      <h3 className="text-xl font-semibold text-indigo-800">{title}</h3>
      <p className="text-base font-light text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}

export default DesignerForDevs;