import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { PopupButton } from "@typeform/embed-react";

function Header() {
  // Placeholder for the actual logo component
  const Logo = () => (
    <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
  );

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-beige bg-opacity-50 px-4 py-4 backdrop-blur-md backdrop-filter sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-center sm:justify-start">
        <Logo />
      </div>
      <div className="items-center text-navy-blue sm:flex">
        <PopupButton
          id={"DSxrFcdl"}
          className="button-secondary"
          medium="jacob-waitlist"
        >
          Join Waitlist
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </PopupButton>
      </div>
    </div>
  );
}

export default Header;
