import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Header() {
  // Placeholder for the actual logo component
  const Logo = () => <img src="/images/logo.jpg" alt="Logo" className="w-30 h-8" />;

  // Placeholder for the actual click handler
  const handleGetStartedClick = () => {
    // Implement navigation or action on click
    console.log('Get started clicked');
  };

  return (
    <div className="bg-gray-50 w-full h-22 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex items-center">
        <button
          className="border border-solid border-blue-500 rounded-full shadow-sm px-6 h-10 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
          onClick={handleGetStartedClick}
        >
          Get started
          <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default Header;