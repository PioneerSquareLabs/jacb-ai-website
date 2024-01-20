import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  const handleJoinWaitlistClick = () => {
    // Logic to handle the join waitlist click event
    console.log('Join waitlist button clicked');
  };

  return (
    <div className="relative bg-white w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-bold text-indigo-900 mb-8">
            Meet JACoB: Your AI Coding Partner
          </h1>
          <p className="text-lg font-light text-indigo-600 mb-10">
            JACoB is the AI-powered coding assistant that turns your designs into deployable code, understands your codebase, and collaborates via your existing workflow.
          </p>
          <button
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleJoinWaitlistClick}
          >
            Join the Waitlist for Early Access
            <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
          </button>
        </div>
        <div className="lg:w-1/2 lg:pl-10 mt-10 lg:mt-0">
          <div className="bg-peach rounded-xl overflow-hidden shadow-lg">
            <img src="/video.png" alt="Demo video" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;