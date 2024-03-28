import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  faCheckCircle,
  faExternalLinkAlt,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SetupStepProps {
  isSelected: boolean;
  isCompleted: boolean;
  codeCommand?: string;
  imageSrc: string;
  title: string;
  description?: string;
  ctaLink?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  onIsCompletedClick?: () => void;
}

async function copyToClipboard(id: string) {
  const el = document.getElementById(id);
  if (navigator.clipboard && el) {
    try {
      await navigator.clipboard.writeText(el.innerText ?? el.textContent);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  } else {
    console.warn("Clipboard API not available.");
  }
}

const SetupStep: React.FC<SetupStepProps> = ({
  isSelected,
  isCompleted,
  codeCommand,
  imageSrc,
  title,
  description,
  ctaLink,
  ctaText,
  onCtaClick,
}) => (
  <div
    className={`mt-4 flex items-center justify-between rounded-lg p-8 ${
      isSelected && !isCompleted ? "bg-gray-100" : "bg-white"
    }`}
  >
    <div className={`flex ${isCompleted ? "flex-row" : "flex-col"}`}>
      <div className="flex items-center">
        <Image src={imageSrc} alt={title} width={50} height={50} />
        <div className="ml-4">
          <h4
            className={`text-lg font-medium ${isCompleted ? "text-gray-400" : "text-gray-900"}`}
          >
            {title}
          </h4>
          {description && (
            <p
              className={`mt-1 text-sm ${isCompleted ? "text-gray-400" : "text-gray-600"}`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      {isCompleted ? (
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="ml-6 self-center text-blue-500"
          size="sm"
        />
      ) : (
        isSelected &&
        ctaText &&
        (ctaLink ?? codeCommand) && (
          <div className="mt-4 flex flex-col space-y-6">
            {codeCommand ? (
              <div className="mt-3 flex w-full items-center justify-center self-start rounded-md bg-white px-4 py-2 text-sm font-medium text-navy-blue">
                <code
                  className="flex-grow text-dark-blue"
                  id="code-block"
                  onClick={() => copyToClipboard("code-block")}
                >
                  npx jacob-setup create
                </code>
                <button
                  className="ml-2 rounded  px-2 py-2 font-bold text-dark-blue hover:text-blue-700"
                  onClick={() => copyToClipboard("code-block")}
                >
                  <FontAwesomeIcon icon={faCopy} className="fa-lg" />
                </button>
              </div>
            ) : (
              <a
                href={ctaLink}
                className="mt-3 items-center justify-center self-start rounded-md border border-blue-500 border-transparent bg-white px-4 py-2 text-sm font-medium text-navy-blue hover:bg-dark-beige"
                target="_blank"
              >
                {ctaText}
                <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
              </a>
            )}

            <button
              onClick={onCtaClick}
              className="items-center justify-center self-start rounded-md border border-transparent bg-dark-blue px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Mark as Complete
              <FontAwesomeIcon icon={faCheckCircle} className="ml-2" />
            </button>
          </div>
        )
      )}
    </div>
  </div>
);

function SetupComponent() {
  const [completedSteps, setCompletedSteps] = useState(
    new Array(4).fill(false),
  );
  const router = useRouter();

  const markAsComplete = async (stepIndex: number) => {
    setCompletedSteps(
      completedSteps.map((completed, index) =>
        index <= stepIndex ? true : completed,
      ),
    );
    if (stepIndex === 3) {
      await router.push("/finished");
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-dark-blue">Quick Setup</h2>
          <p className="mt-2 text-lg text-gray-600">
            Let’s set up your first project with JACoB
          </p>
        </div>
        <div className="mt-12">
          <SetupStep
            isSelected={completedSteps[0] === false}
            isCompleted={completedSteps[0]}
            imageSrc="/images/github.png"
            title="Install the JACoB AI Bot in Github"
            description="Login with your Github and install the application"
            ctaText="JACoB AI Bot"
            onCtaClick={() => markAsComplete(0)}
            ctaLink="https://github.com/apps/jacob-ai-bot"
          />
          <SetupStep
            isSelected={
              completedSteps[1] === false && completedSteps[0] === true
            }
            isCompleted={completedSteps[1]}
            imageSrc="/images/terminal.png"
            title="Customize Your Configuration"
            description="Run the JACoB setup command in your project's root directory"
            ctaText="Mark as Complete"
            codeCommand="npx jacob-setup create"
            onCtaClick={() => markAsComplete(1)}
          />
          <SetupStep
            isSelected={
              completedSteps[2] === false && completedSteps[1] === true
            }
            isCompleted={completedSteps[2]}
            imageSrc="/images/figma.png"
            title="Install the JACoB Figma Plugin"
            description="Get the Figma plugin"
            ctaText="JACoB Figma Plugin"
            onCtaClick={() => markAsComplete(2)}
            ctaLink="https://www.figma.com/community/plugin/1326684504185921461/jacob-ai-codegen-connector"
          />
          <SetupStep
            isSelected={
              completedSteps[3] === false && completedSteps[2] === true
            }
            isCompleted={completedSteps[3]}
            imageSrc="/images/discord.png"
            title="Join our Discord"
            description="Provide feedback on your experience with fellow devs"
            ctaText="Join Discord"
            onCtaClick={() => markAsComplete(3)}
            ctaLink="https://discord.gg/73TBGbES"
          />
        </div>
        <div className="mt-4 text-center text-xs text-gray-400">
          <p>
            Not ready to install quite yet? View the{" "}
            <a
              href="https://docs.jacb.ai"
              target="_blank"
              className="text-blue-500"
            >
              full documentation
            </a>{" "}
            for more details and tutorials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SetupComponent;
