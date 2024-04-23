import { faArrowDown, faSpinner } from "@fortawesome/free-solid-svg-icons";
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
}) => {
  return (
    <div className={`relative flex h-full w-full flex-col ${loading ? 'bg-gray-900/50' : 'bg-gray-900/90'}`}>
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-white" />
          <span className="ml-3 text-xl font-semibold text-white">Loading...</span>
        </div>
      )}
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
        </div>

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
      </div>
    </div>
  );
};
