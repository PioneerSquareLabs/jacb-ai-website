import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Header() {
  const Logo = () => (
    <img src="/images/logo.svg" alt="Logo" className="h-8 w-auto" />
  );

  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-between bg-beige bg-opacity-50 px-4 py-4 backdrop-blur-md backdrop-filter sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center justify-center sm:justify-start">
        <Logo />
      </div>
      <div className="items-center text-navy-blue sm:flex">
        <Link href="/signup" className="button-secondary">
          Get Started
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
        <a
          href="https://www.github.com/jacob-ai-bot/jacob"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4 text-4xl text-black"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default Header;
