import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox, faBook } from "@fortawesome/free-solid-svg-icons";

function FinishedPage() {
  const handleEmailClick = () => {
    window.location.href = "mailto:kevin@psl.com";
  };

  const handleWhitepaperClick = () => {
    window.open("https://jacb.ai/whitepaper", "_blank");
  };

  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-beige pt-20">
      <div className="w-full max-w-2xl px-4">
        <div className="mb-12">
          <h1 className="mb-2 text-3xl text-dark-blue">Congratulations!</h1>
          <p className="text-lg text-gray-600">
            You’re ready to go from design to code in minutes. Here are some
            more resources to get you started.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="mb-3 text-xl text-dark-blue">
            Walkthrough a tutorial
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            No need to start from scratch. We’ll supply the Figma files and a
            walkthrough to launch your first project.
          </p>
          <div className="flex overflow-hidden rounded-lg border border-gray-400">
            <img
              src="/assets/images/222ce1245453f6d6c97ea733d22f54b2183ef738.png"
              alt="Tutorial Thumbnail"
              className="w-1/4"
            />
            <div className="flex-grow bg-white p-4">
              <a
                href="https://www.figma.com/community/file/1339388263795075198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-blue transition-colors hover:text-blue-700"
              >
                Start Tutorial
              </a>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h2 className="mb-3 text-xl text-dark-blue">
            Become a design partner
          </h2>
          <p className="mb-4 text-lg text-gray-600">
            Love what we’re doing? We’re looking for people to work directly
            with and get feedback to improve JACoB.
          </p>
          <button
            onClick={handleEmailClick}
            className="inline-flex items-center rounded-lg bg-navy-blue px-4 py-2 text-sm font-medium text-white"
          >
            Get in touch
            <FontAwesomeIcon icon={faInbox} className="ml-2" />
          </button>
        </div>
        <div>
          <h2 className="mb-3 text-xl text-dark-blue">Read our white-paper</h2>
          <p className="mb-4 text-lg text-gray-600">
            You’re ready to go from design to code in minutes. Here are some
            more resources to get you started.
          </p>
          <button
            onClick={handleWhitepaperClick}
            className="inline-flex items-center rounded-lg bg-navy-blue px-4 py-2 text-sm font-medium text-white"
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
