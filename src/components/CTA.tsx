import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBell,
  faUsers,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { PopupButton } from "@typeform/embed-react";

interface FeatureCardProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
    <FontAwesomeIcon
      icon={icon}
      className="mb-2 text-3xl text-pink sm:mb-0 sm:mr-4"
    />
    <div>
      <h3 className="text-xl font-medium text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const CtaComponent = () => {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-3xl bg-dark-blue p-6 shadow-lg shadow-blue-300/20 sm:max-w-xl sm:p-8 lg:max-w-7xl lg:p-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Be Among the First to
            <span className="block text-pink">Elevate your Coding</span>
          </h1>
          <PopupButton
            id={"DSxrFcdl"}
            className="focus:ring-pink-400 mt-8 flex h-12 w-[300px] max-w-xl cursor-pointer items-center justify-center rounded-full bg-pink px-8 font-medium uppercase text-indigo-900 hover:bg-pink hover:bg-pink/80 focus:outline-none focus:ring-2 focus:ring-offset-2 md:w-[400px] lg:mt-12"
            medium="jacob-waitlist"
          >
            Join the Waitlist
          </PopupButton>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-24 sm:grid-cols-3 lg:gap-8">
            <FeatureCard
              icon={faStar}
              title="Early Access"
              description="Get a head start in experiencing and influencing the future of AI coding."
            />
            <FeatureCard
              icon={faBell}
              title="Exclusive Updates"
              description="Stay informed with the latest developments and updates as JACoB evolves."
            />
            <FeatureCard
              icon={faUsers}
              title="Community Influence"
              description="Be part of a community that's shaping JACoB to be the best AI coding assistant."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaComponent;
