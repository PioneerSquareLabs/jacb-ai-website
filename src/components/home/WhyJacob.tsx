import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCodeBranch,
  faEye,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

const WhyJacob = () => {
  interface TaskCardProps {
    title: string;
    description: string;
    icon: any;
    color: string;
  }

  const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    icon,
    color,
  }) => {
    return (
      <div className="flex w-full flex-col rounded-xl border border-indigo-700 bg-white bg-opacity-10 p-6 sm:w-auto">
        <FontAwesomeIcon icon={icon} className={`mb-6 h-8 w-8 ${color}`} />
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
        <p className="text-sm font-light text-white opacity-50">
          {description}
        </p>
      </div>
    );
  };
  return (
    <div className="flex w-full flex-col items-center bg-dark-blue py-12 text-white">
      <div className="w-full max-w-7xl px-4">
        <div className="mb-16 flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-2/5">
            <h1 className="mr-4 inline-block text-3xl font-bold text-white md:text-5xl lg:text-6xl">
              Why <span className="text-pink">JACoB</span> Stands Apart
            </h1>
            <p className="mt-4 text-base font-light text-gray-400 md:text-lg">
              Beyond Autocompletion - Pioneering Intelligent Automation in
              AI-Driven Software Development
            </p>
          </div>
          <p className="text-md lg:text-md mx-auto mt-6 max-w-xl self-end text-left font-light text-white sm:text-center md:text-lg lg:mt-0 lg:text-right">
            While tools like GitHub CoPilot suggest snippets, JACoB delivers
            complete development tasks. It goes beyond auto-complete,
            integrating directly into your existing workflow to handle tasks
            from design conversion to code review, fully customized to your
            team's coding style and standards.
          </p>
        </div>
      </div>
      <div className="mt-2 flex w-full max-w-7xl flex-col justify-center gap-4 px-4 md:flex-row lg:mt-8">
        <TaskCard
          title="End-to-End Task Management"
          description="JACoB doesn't stop at suggestions; it takes on tasks from start to finish, including writing, reviewing, and testing."
          icon={faCheckCircle}
          color="text-green-400"
        />
        <TaskCard
          title="Open Source and Extensible"
          description="JACoB's open-source nature means you can see under the hood and adapt it to your exact needs."
          icon={faCodeBranch}
          color="text-yellow-400"
        />
        <TaskCard
          title="Full Codebase View"
          description="JACoB understands every part of your project, not just the file you're working on, ensuring a holistic approach to development."
          icon={faEye}
          color="text-blue-400"
        />
        <TaskCard
          title="Customizable to Fit Your Workflow"
          description="With JACoB, you set the rules. Configure everything in a JSON file right in your codebase, and JACoB follows suit."
          icon={faTools}
          color="text-purple-400"
        />
      </div>
    </div>
  );
};

export default WhyJacob;
