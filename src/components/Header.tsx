import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  // Placeholder for the actual logo component
  const Logo = () => (
    <img src="/images/logo.svg" alt="Logo" className="w-30 h-8" />
  );

  // Placeholder for the actual click handler
  const handleGetStartedClick = () => {
    // Implement navigation or action on click
    console.log("Get started clicked");
  };

  return (
    <div className="flex w-full items-center justify-between bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center text-navy-blue">
        <button
          className="flex h-10 items-center justify-center rounded-xl border border-solid border-navy-blue px-6 shadow-sm transition-colors hover:bg-blue-500 hover:text-white"
          onClick={handleGetStartedClick}
        >
          Get started
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Header;
