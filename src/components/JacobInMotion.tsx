import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function JacobInMotion() {
  const handleLiveCodingClick = () => {
    // Implement the action for when the Live Coding Session is clicked
  };

  const handleCodeReviewClick = () => {
    // Implement the action for when the Code Review Process is clicked
  };

  const handleWorkflowIntegrationClick = () => {
    // Implement the action for when the Workflow Integration is clicked
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="max-w-7xl px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-indigo-800">JACoB<span className="text-pink-500 border-2 border-pink-500 inline-block"> in Motion</span>:</h1>
          <p className="text-6xl text-indigo-800 mt-8">Watch the AI Developer at Work</p>
          <p className="text-lg font-light text-gray-600 mt-4">Experience the seamless integration and coding expertise of JACoB.</p>
        </div>
        <div className="flex flex-wrap justify-between mt-16 gap-4">
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 flex-1" onClick={handleLiveCodingClick}>
            <h2 className="text-xl font-semibold text-indigo-800">Live Coding Session</h2>
            <p className="text-sm font-light text-gray-600 mt-2">A recorded session showing JACoB writing code based on a task description.</p>
          </div>
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 flex-1" onClick={handleCodeReviewClick}>
            <h2 className="text-xl font-semibold text-indigo-800">Code Review Process</h2>
            <p className="text-sm font-light text-gray-600 mt-2">How JACoB reviews a pull request, providing insights and suggestions.</p>
          </div>
          <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 flex-1" onClick={handleWorkflowIntegrationClick}>
            <h2 className="text-xl font-semibold text-indigo-800">Workflow Integration</h2>
            <p className="text-sm font-light text-gray-600 mt-2">JACoB interacting with common developer tools and platforms, such as GitHub actions, demonstrating real-time project contributions.</p>
          </div>
        </div>
        <div className="relative mt-16">
          <img src="/images/f30b5ecf6de4994d024bbcc2d7a0e8875c15563e.jpg" alt="Video" className="w-full h-auto rounded-3xl bg-gradient-to-b from-transparent to-black opacity-80" />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent backdrop-blur-md rounded-full p-3 border-2 border-pink-500 shadow-lg flex items-center justify-center cursor-pointer" onClick={() => {/* Implement play video action */}}>
            <div className="bg-pink-500 rounded-full p-2">
              <FontAwesomeIcon icon={faPlay} className="text-white" size="2x" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JacobInMotion;