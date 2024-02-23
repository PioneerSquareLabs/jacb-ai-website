import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFigma,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function SetupComponent() {
  const [completedSteps, setCompletedSteps] = useState(
    new Array(4).fill(false),
  );
  const router = useRouter();

  const markAsComplete = async (stepIndex: number) => {
    setCompletedSteps(
      completedSteps.map((completed, index) =>
        index <= stepIndex ? true : completed,
      ),
    );
    if (stepIndex === 3) {
      await router.push("/finished");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-beige">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-blue">Quick Setup</h2>
          <p className="mt-2 text-lg text-gray-600">
            Let’s set up your first project with JACoB
          </p>
        </div>
        <div className="mt-12">
          {completedSteps[0] ? (
            <div className="flex items-center justify-between rounded-lg bg-dark-beige p-8">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-navy-blue"
                />
                <h4 className="ml-4 text-lg font-medium text-gray-900">
                  Install the JACoB AI Bot in Github
                </h4>
              </div>
            </div>
          ) : (
            <div className="flex items-center rounded-lg bg-dark-beige p-8">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-dark-blue"
                size="2x"
              />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">
                  Install the JACoB AI Bot in Github
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Login with your Github and install the application
                </p>
                <a
                  href="https://github.com/apps/jacob-ai-bot"
                  className="mt-3 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-navy-blue hover:bg-dark-beige"
                >
                  JACoB AI Bot
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                </a>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => markAsComplete(0)}
                    className="hover:bg-violet-beauregarde inline-flex items-center rounded-md border border-transparent bg-navy-blue px-6 py-2 text-sm font-medium text-white shadow-sm"
                  >
                    Mark as Complete
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {completedSteps[1] ? (
            <div className="mt-8 flex items-center justify-between rounded-lg bg-white p-8">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-navy-blue"
                />
                <h4 className="ml-4 text-lg font-medium text-gray-900">
                  Customize Your Configuration
                </h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex items-center rounded-lg bg-white p-8">
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">
                  Customize Your Configuration
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Run the JACoB setup command in your project directory
                </p>
                <div className="mt-3 rounded-sm bg-white p-2">
                  <code className="text-sm text-navy-blue">
                    npx jacob-setup create
                  </code>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Answer the questions! A config file will be created.
                </p>
                <button
                  onClick={() => markAsComplete(1)}
                  className="hover:bg-violet-beauregarde mt-4 inline-flex items-center rounded-md border border-transparent bg-navy-blue px-6 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Mark as Complete
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {completedSteps[2] ? (
            <div className="mt-8 flex items-center justify-between rounded-lg bg-dark-beige p-8">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-navy-blue"
                />
                <h4 className="ml-4 text-lg font-medium text-gray-900">
                  Install the JACoB Figma Plugin
                </h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex items-center rounded-lg bg-dark-beige p-8">
              <FontAwesomeIcon
                icon={faFigma}
                className="text-dark-blue"
                size="2x"
              />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">
                  Install the JACoB Figma Plugin
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Get the plugin from Figma Community
                </p>
                <div className="flex-col space-y-2">
                  <a
                    href="https://www.figma.com/community/plugin/1326684504185921461/jacob-ai-codegen-connector"
                    className="mt-3 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-navy-blue hover:bg-dark-beige"
                  >
                    JACoB Figma Plugin
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </a>
                  <button
                    onClick={() => markAsComplete(2)}
                    className="hover:bg-violet-beauregarde mt-4 flex items-center rounded-md border border-transparent bg-navy-blue px-6 py-2 text-sm font-medium text-white shadow-sm"
                  >
                    Mark as Complete
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {completedSteps[3] ? (
            <div className="mt-8 flex items-center justify-between rounded-lg bg-white p-8">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-navy-blue"
                />
                <h4 className="ml-4 text-lg font-medium text-gray-900">
                  Join our Discord
                </h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 flex items-center rounded-lg bg-white p-8">
              <FontAwesomeIcon
                icon={faDiscord}
                className="text-dark-blue"
                size="2x"
              />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">
                  Join our Discord
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  Provide feedback on your experience with fellow devs
                </p>
                <a
                  href="https://discord.gg/73TBGbES"
                  className="hover:bg-violet-beauregarde mt-3 inline-flex items-center rounded-md border border-transparent bg-navy-blue px-4 py-2 text-sm font-medium text-white"
                >
                  Join Discord
                  <FontAwesomeIcon icon={faDiscord} className="ml-2" />
                </a>
                <button
                  onClick={() => markAsComplete(3)}
                  className="hover:bg-violet-beauregarde mt-4 flex items-center rounded-md border border-transparent bg-navy-blue px-6 py-2 text-sm font-medium text-white shadow-sm"
                >
                  Mark as Complete
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="mt-12 text-right">
          <button className="bg-not-black-black inline-flex items-center rounded-md border border-transparent px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900">
            Submit Feedback
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupComponent;
