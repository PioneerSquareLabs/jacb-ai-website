import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faBook } from '@fortawesome/free-solid-svg-icons';

function FinishedPage() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:kevin@psl.com';
  };

  const handleWhitepaperClick = () => {
    window.open('https://jacb.ai/whitepaper', '_blank');
  };

  return (
    <div className="bg-beige w-full min-h-screen flex justify-center items-start pt-20">
      <div className="w-full max-w-2xl px-4">
        <div className="mb-12">
          <h1 className="text-3xl text-dark-blue mb-2">Congratulations!</h1>
          <p className="text-lg text-gray-600">
            You’re ready to go from design to code in minutes. Here are some more resources to get you started.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-xl text-dark-blue mb-3">Walkthrough a tutorial</h2>
          <p className="text-lg text-gray-600 mb-4">
            No need to start from scratch. We’ll supply the Figma files and a walkthrough to launch your first project.
          </p>
          <div className="border border-gray-400 rounded-lg overflow-hidden flex">
            <img
              src="/assets/images/222ce1245453f6d6c97ea733d22f54b2183ef738.png"
              alt="Tutorial Thumbnail"
              className="w-1/4"
            />
            <div className="flex-grow p-4 bg-white">
              <a href="https://www.figma.com/community/file/1339388263795075198" target="_blank" rel="noopener noreferrer" className="text-light-blue hover:text-blue-700 transition-colors">Start Tutorial</a>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-xl text-dark-blue mb-3">Become a design partner</h2>
          <p className="text-lg text-gray-600 mb-4">
            Love what we’re doing? We’re looking for people to work directly with and get feedback to improve JACoB.
          </p>
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center bg-navy-blue rounded-lg px-4 py-2 text-sm font-medium text-white"
          >
            Get in touch
            <FontAwesomeIcon icon={faInbox} className="ml-2" />
          </button>
        </div>
        <div>
          <h2 className="text-xl text-dark-blue mb-3">Read our white-paper</h2>
          <p className="text-lg text-gray-600 mb-4">
            You’re ready to go from design to code in minutes. Here are some more resources to get you started.
          </p>
          <button
            onClick={handleWhitepaperClick}
            className="inline-flex items-center bg-navy-blue rounded-lg px-4 py-2 text-sm font-medium text-white"
          >
            Read paper
            <FontAwesomeIcon icon={faBook} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishedPage;