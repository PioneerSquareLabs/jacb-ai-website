import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

function DesignerForDevs() {
  // Event handlers can be added here if needed
  // Example: const handleButtonClick = () => { /* logic */ };

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-row py-12">
      <div className="mx-auto flex max-w-lg flex-col items-center p-8 px-2">
        <h1 className="text-5xl font-bold leading-none text-dark-blue">
          Designed for Developers, Tailored for Teams
        </h1>
        <p className="mt-4 text-lg font-light text-gray-600">
          JACoB is built from the ground up to address the specific needs of
          software development.
        </p>
      </div>
      <div className="mt-8 flex w-full flex-1 flex-wrap justify-center gap-2 px-4">
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

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="bg-dark-beige flex w-full flex-col rounded-xl border border-gray-300 p-4 sm:w-1/2 lg:w-1/3">
      <h3 className="text-lg text-dark-blue">{title}</h3>
      <p className="mt-2 text-sm font-light text-gray-600">{description}</p>
    </div>
  );
}

export default DesignerForDevs;
