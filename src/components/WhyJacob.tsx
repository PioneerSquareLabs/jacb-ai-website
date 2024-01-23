import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md m-4">
    <div className="text-purple-500 mb-2">{icon}</div>
    <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400 text-center">{description}</p>
  </div>
);

const WhyJacob: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why JACoB Stands Apart</h2>
          <p className="text-xl">Beyond Autocompletion - Full-Spectrum Coding Assistance</p>
          <p className="mt-4 text-gray-400">
            While tools like GitHub CoPilot suggest snippets, JACoB delivers complete development tasks. It's not just about the lines of code; it's about contributing meaningfully to your project as a whole.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            icon={<span>🌟</span>}
            title="End-to-End Task Management"
            description="JACoB doesn't stop at suggestions; it takes on tasks from start to finish, including writing, reviewing, and testing."
          />
          <FeatureCard
            icon={<span>🔗</span>}
            title="Open Source and Extensible"
            description="JACoB's open-source nature means you can see under the hood and adapt it to your exact needs"
          />
          <FeatureCard
            icon={<span>🖥️</span>}
            title="Full Codebase View"
            description="JACoB understands every part of your project, not just the file you're working on, ensuring a holistic approach to development."
          />
          <FeatureCard
            icon={<span>⚙️</span>}
            title="Customizable to Fit Your Workflow"
            description="With JACoB, you set the rules. Configure everything in a YAML file right in your codebase, and JACoB follows suit."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyJacob;