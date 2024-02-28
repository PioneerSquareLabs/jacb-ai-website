
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

function FinishedPage() {
  const handleFigmaClick = () => {
    window.open("https://www.figma.com/community/file/1339388263795075198", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/PioneerSquareLabs/jacob-template", "_blank");
  };

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      <div className="flex flex-col items-start mt-16 w-3/4 max-w-4xl">
        <div className="space-y-4">
          <h1 className="text-3xl text-dark-blue">Get Started With Your First Project</h1>
          <p className="text-base text-gray-600">
            We know getting started is the hardest part, so we’ve made it easy with an out-of-the-box project built by JACoB and our community.
          </p>
        </div>
        <div className="mt-8 self-start">
          <h2 className="text-lg text-dark-blue mb-2">Starter Files</h2>
          <div className="flex items-center mb-2">
            <div className="bg-dark-blue w-6 h-6 rounded-full flex items-center justify-center">
              <img src="/images/figma.png" alt="Figma logo" className="w-3 h-3" onClick={handleFigmaClick} />
            </div>
            <a href="https://www.figma.com/community/file/1339388263795075198" className="ml-2 text-sm underline text-light-blue" onClick={handleFigmaClick}>Figma Files</a>
          </div>
          <div className="flex items-center">
            <div className="bg-dark-blue w-6 h-6 rounded-full flex items-center justify-center">
              <img src="/images/github.png" alt="Github logo" className="w-3 h-3" onClick={handleGithubClick} />
            </div>
            <a href="https://github.com/PioneerSquareLabs/jacob-template" className="ml-2 text-sm underline text-light-blue" onClick={handleGithubClick}>Github Repo</a>
          </div>
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-lg text-dark-blue mb-2">Video</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/P9z7vmBMl6Q?si=CT6YiySCD51B4sk1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinishedPage;