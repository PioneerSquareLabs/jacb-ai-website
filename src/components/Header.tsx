import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  // Placeholder for the actual logo component
  const Logo = () => (
    <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
  );

  // Placeholder for the actual click handler
  const handleGetStartedClick = () => {
    // Implement navigation or action on click
    console.log("Get started clicked");
  };

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-beige bg-opacity-50 px-4 py-4 backdrop-blur-md backdrop-filter sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-center sm:justify-start">
        <Logo />
      </div>
      <div className="items-center text-navy-blue sm:flex">
        <button className="button-secondary" onClick={handleGetStartedClick}>
          Get started
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Header;
