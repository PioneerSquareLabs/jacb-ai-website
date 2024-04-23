import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type FC } from "react";
import { type Message } from "~/types";
import { ChatInput } from "./ChatInput";
import { ChatLoader } from "./ChatLoader";
import { ChatMessage } from "./ChatMessage";

interface Props {
  messages: Message[];
  loading: boolean;
  onSend: (message: Message) => void;
  onReset: () => void;
  isResponding?: boolean;
  shouldHideLogo?: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement>;
  sidebarRef: React.RefObject<HTMLDivElement>;
  checkIfAtBottom: () => void;
  scrollToBottom: () => void;
  isAtBottom: boolean;
  showInitialButtons: boolean;
  onButtonClick: (buttonText: string) => void;
}

export const Chat: FC<Props> = ({
  messages,
  loading,
  onSend,
  onReset,
  isResponding = false,
  shouldHideLogo = false,
  messagesEndRef,
  sidebarRef,
  checkIfAtBottom,
  scrollToBottom,
  isAtBottom,
  showInitialButtons,
  onButtonClick,
}) => {
  const initialButtons = [
    { text: "Find Potential Bugs", action: () => onButtonClick("Find Potential Bugs") },
    { text: "Improve Test Coverage", action: () => onButtonClick("Improve Test Coverage") },
    { text: "Review GitHub Issues", action: () => onButtonClick("Review GitHub Issues") },
    { text: "Create a New Issue", action: () => onButtonClick("Create a New Issue") },
  ];

  return (
    <div className="relative flex h-full w-full flex-col bg-gray-900/90">
      <div
        className={`flex items-center justify-between border-b border-gray-800 p-4 ${
          shouldHideLogo ? "hidden" : ""
        }`}
      >
        <div className={`flex items-center `}>
          <img
            className="h-14 w-14 rounded-full"
            src="/images/logo.png"
            alt="JACoB Logo"
          />
          <h1 className="ml-4 text-lg text-white">JACoB</h1>
        </div>
      </div>
      <div className="space-between flex h-full flex-col rounded-lg px-2 pb-8 sm:p-4">
        <div
          className="hide-scrollbar flex flex-1 flex-col overflow-y-auto"
          ref={sidebarRef}
          onScroll={checkIfAtBottom}
        >
          {showInitialButtons ? (
            <div className="flex flex-wrap justify-around p-4">
              {initialButtons.map((button, index) => (
                <button
                  key={index}
                  className="m-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
                  onClick={button.action}
                >
                  {button.text}
                </button>
              ))}
            </div>
          ) : (
            <>
              {messages.map((message, index) => (
                <div key={index} className="my-1 sm:my-2">
                  <ChatMessage message={message} isResponding={isResponding} />
                </div>
              ))}
              {loading && (
                <div className="my-1 sm:my-1.5">
                  <ChatLoader />
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        {!showInitialButtons && (
          <div className="relative left-0 mb-2 mt-3 w-full sm:mb-6 sm:mt-6">
            <ChatInput onSend={onSend} isResponding={isResponding} />
            {!isAtBottom && (
              <div
                className="absolute left-1/2 top-0 -my-12  flex h-10 w-10 -translate-x-1/2 transform cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white bg-opacity-80  transition duration-300 ease-in-out hover:bg-opacity-100"
                onClick={scrollToBottom}
              >
                <FontAwesomeIcon icon={faArrowDown} size="2x" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
