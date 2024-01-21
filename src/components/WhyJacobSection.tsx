import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCodeBranch, faEye, faCogs } from '@fortawesome/free-solid-svg-icons';

function WhyJacobSection() {
  const handleLearnMoreClick = () => {
    // Implement the logic to handle the learn more click event
    console.log('Learn more clicked');
  };

  return (
    <div className="bg-indigo-900 text-white w-full min-h-screen flex flex-col items-center py-16">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold mb-4">
            <span>Why </span>
            <span className="text-pink-500">JACoB</span>
          </h2>
          <h3 className="text-5xl font-bold mb-8">Stands Apart</h3>
          <p className="text-lg font-light text-white text-opacity-50 mb-16 max-w-4xl text-center">
            Beyond Autocompletion - Full-Spectrum Coding Assistance
          </p>
        </div>
        <div className="text-right max-w-4xl ml-auto mb-16">
          <p className="text-sm font-light">
            While tools like GitHub CoPilot suggest snippets, JACoB delivers complete development tasks. It's not just about the lines of code; it's about contributing meaningfully to your project as a whole.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faStar} size="3x" className="mb-4" />
            <div className="text-xl font-medium mb-4">End-to-End Task Management</div>
            <p className="text-sm font-light text-white text-opacity-50">
              JACoB doesn't stop at suggestions; it takes on tasks from start to finish, including writing, reviewing, and testing.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faCodeBranch} size="3x" className="mb-4" />
            <div className="text-xl font-medium mb-4">Open Source and Extensible</div>
            <p className="text-sm font-light text-white text-opacity-50">
              JACoB's open-source nature means you can see under the hood and adapt it to your exact needs.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faEye} size="3x" className="mb-4" />
            <div className="text-xl font-medium mb-4">Full Codebase View</div>
            <p className="text-sm font-light text-white text-opacity-50">
              JACoB understands every part of your project, not just the file you're working on, ensuring a holistic approach to development.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 border border-indigo-700 rounded-xl p-6 flex flex-col items-center">
            <FontAwesomeIcon icon={faCogs} size="3x" className="mb-4" />
            <div className="text-xl font-medium mb-4">Customizable to Fit Your Workflow</div>
            <p className="text-sm font-light text-white text-opacity-50">
              With JACoB, you set the rules. Configure everything in a YAML file right in your codebase, and JACoB follows suit.
            </p>
          </div>
        </div>
        <button
          onClick={handleLearnMoreClick}
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default WhyJacobSection;