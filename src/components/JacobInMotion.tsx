import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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
    <div className="mt-12 flex min-h-screen w-full items-center justify-center bg-white pb-12">
      <div className="max-w-7xl px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-dark-blue">
            JACoB <span className=" text-pink"> in Motion</span>:
          </h1>
          <h1 className="text-6xl text-dark-blue">
            Watch the AI Developer at Work
          </h1>
          <p className="mt-4 text-lg font-light text-gray-600">
            Experience the seamless integration and coding expertise of JACoB.
          </p>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4">
          <div
            className="bg-dark-beige border-orange-200 flex-1 rounded-lg border p-4"
            onClick={handleLiveCodingClick}
          >
            <h2 className="text-xl font-semibold text-dark-blue">
              Live Coding Session
            </h2>
            <p className="mt-2 text-sm font-light text-gray-600">
              A recorded session showing JACoB writing code based on a task
              description.
            </p>
          </div>
          <div
            className="bg-dark-beige border-orange-200 flex-1 rounded-lg border p-4"
            onClick={handleCodeReviewClick}
          >
            <h2 className="text-xl font-semibold text-dark-blue">
              Code Review Process
            </h2>
            <p className="mt-2 text-sm font-light text-gray-600">
              How JACoB reviews a pull request, providing insights and
              suggestions.
            </p>
          </div>
          <div
            className="bg-dark-beige border-orange-200 flex-1 rounded-lg border p-4"
            onClick={handleWorkflowIntegrationClick}
          >
            <h2 className="text-xl font-semibold text-dark-blue">
              Workflow Integration
            </h2>
            <p className="mt-2 text-sm font-light text-gray-600">
              JACoB interacting with common developer tools and platforms, such
              as GitHub actions, demonstrating real-time project contributions.
            </p>
          </div>
        </div>
        <div className="relative mt-16">
          <img
            src="/images/video.png"
            alt="Video"
            className="h-auto w-full rounded-3xl bg-gradient-to-b from-transparent to-black opacity-80"
          />
          <button
            className="border-pink-500 absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border-2 bg-transparent px-3 py-2 shadow-lg backdrop-blur-md"
            onClick={() => {
              /* Implement play video action */
            }}
          >
            <div className="rounded-full bg-pink p-6 px-7">
              <FontAwesomeIcon icon={faPlay} className="text-white" size="2x" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JacobInMotion;
