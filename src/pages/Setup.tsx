import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFigma, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

function SetupComponent() {
  const [completedSteps, setCompletedSteps] = useState(new Array(4).fill(false));
  const router = useRouter();

  const markAsComplete = (stepIndex: number) => {
    setCompletedSteps(completedSteps.map((completed, index) => index <= stepIndex ? true : completed));
    if (stepIndex === 3) {
      router.push('/finished');
    }
  };

  return (
    <div className="bg-beige min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-blue">Quick Setup</h2>
          <p className="mt-2 text-lg text-gray-600">Let’s set up your first project with JACoB</p>
        </div>
        <div className="mt-12">
          {completedSteps[0] ? (
            <div className="rounded-lg bg-dark-beige p-8 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-navy-blue" />
                <h4 className="text-lg font-medium text-gray-900 ml-4">Install the JACoB AI Bot in Github</h4>
              </div>
            </div>
          ) : (
            <div className="rounded-lg bg-dark-beige p-8 flex items-center">
              <FontAwesomeIcon icon={faGithub} className="text-dark-blue" size="2x" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">Install the JACoB AI Bot in Github</h4>
                <p className="mt-1 text-sm text-gray-600">Login with your Github and install the application</p>
                <a href="https://github.com/apps/jacob-ai-bot" className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-navy-blue bg-white hover:bg-dark-beige">
                  JACoB AI Bot
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                </a>
                <div className="mt-4 flex justify-between items-center">
                  <button onClick={() => markAsComplete(0)} className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-navy-blue hover:bg-violet-beauregarde">
                    Mark as Complete
                    <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {completedSteps[1] ? (
            <div className="mt-8 rounded-lg bg-white p-8 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-navy-blue" />
                <h4 className="text-lg font-medium text-gray-900 ml-4">Customize Your Configuration</h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-lg bg-white p-8 flex items-center">
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">Customize Your Configuration</h4>
                <p className="mt-1 text-sm text-gray-600">Run the JACoB setup command in your project directory</p>
                <div className="mt-3 bg-white p-2 rounded-sm">
                  <code className="text-sm text-navy-blue">npx jacob-setup create</code>
                </div>
                <p className="mt-2 text-sm text-gray-600">Answer the questions! A config file will be created.</p>
                <button onClick={() => markAsComplete(1)} className="mt-4 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-navy-blue hover:bg-violet-beauregarde">
                  Mark as Complete
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {completedSteps[2] ? (
            <div className="mt-8 rounded-lg bg-dark-beige p-8 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-navy-blue" />
                <h4 className="text-lg font-medium text-gray-900 ml-4">Install the JACoB Figma Plugin</h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-lg bg-dark-beige p-8 flex items-center">
              <FontAwesomeIcon icon={faFigma} className="text-dark-blue" size="2x" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">Install the JACoB Figma Plugin</h4>
                <p className="mt-1 text-sm text-gray-600">Get the plugin from Figma Community</p>
                <a href="https://www.figma.com/community/plugin/1326684504185921461/jacob-ai-codegen-connector" className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-navy-blue bg-white hover:bg-dark-beige">
                  JACoB Figma Plugin
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                </a>
                <button onClick={() => markAsComplete(2)} className="mt-4 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-navy-blue hover:bg-violet-beauregarde">
                  Mark as Complete
                  <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
                </button>
              </div>
            </div>
          )}

          {completedSteps[3] ? (
            <div className="mt-8 rounded-lg bg-white p-8 flex items-center justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-navy-blue" />
                <h4 className="text-lg font-medium text-gray-900 ml-4">Join our Discord</h4>
              </div>
            </div>
          ) : (
            <div className="mt-8 rounded-lg bg-white p-8 flex items-center">
              <FontAwesomeIcon icon={faDiscord} className="text-dark-blue" size="2x" />
              <div className="ml-4">
                <h4 className="text-lg font-medium text-dark-blue">Join our Discord</h4>
                <p className="mt-1 text-sm text-gray-600">Provide feedback on your experience with fellow devs</p>
                <a href="https://discord.gg/73TBGbES" className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-navy-blue hover:bg-violet-beauregarde">
                  Join Discord
                  <FontAwesomeIcon icon={faDiscord} className="ml-2" />
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="mt-12 text-right">
          <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-not-black-black hover:bg-gray-900">
            Submit Feedback
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SetupComponent;