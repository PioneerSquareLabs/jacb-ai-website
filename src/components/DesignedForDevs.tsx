import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

function DesignerForDevs() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col py-4 md:flex-row md:py-12">
      <div className="mx-auto flex max-w-lg flex-col items-center p-8 px-2 text-center md:text-left">
        <h1 className="text-3xl font-bold leading-none text-dark-blue md:text-5xl">
          Designed for Developers, Tailored for Teams
        </h1>
        <p className="text-md mt-4 font-light text-gray-600 md:text-lg">
          JACoB is built from the ground up to address the specific needs of
          software development.
        </p>
      </div>
      <div className="mt-2 flex w-full flex-1 flex-wrap justify-center gap-2 px-4 md:mt-8">
        <FeatureCard
          title="Efficiency Boost"
          description="JACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving."
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
          title="Customizable Workflow"
          description="Configure JACoB with a simple config file to match your team's unique coding style and existing preferences."
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex w-full flex-col rounded-xl border border-gray-300 bg-dark-beige p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <h3 className="text-md text-dark-blue md:text-lg">{title}</h3>
      <p className="md:text-md mt-2 text-sm font-light text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default DesignerForDevs;
