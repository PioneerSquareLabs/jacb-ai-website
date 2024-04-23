import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  type FC,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { type Message, Role } from "~/types";

interface Props {
  onSend: (message: Message) => void;
  isResponding?: boolean;
}

export const ChatInput: FC<Props> = ({ onSend, isResponding = false }) => {
  const [content, setContent] = useState<string>();
  const [showInput, setShowInput] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initialButtons = [
    { label: "Find Potential Bugs", onClick: () => console.log("Find Potential Bugs clicked") },
    { label: "Improve Test Coverage", onClick: () => console.log("Improve Test Coverage clicked") },
    { label: "Review GitHub Issues", onClick: () => console.log("Review GitHub Issues clicked") },
    { label: "Create a New Issue", onClick: () => console.log("Create a New Issue clicked") },
  ];

  const handleButtonClick = (buttonFunction: () => void) => {
    buttonFunction();
    setShowInput(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 2000) {
      toast.error("Message limit is 2000 characters");
      return;
    }

    setContent(value);
  };

  const handleSend = () => {
    if (!content) {
      alert("Please enter a message");
      return;
    }
    onSend({ role: Role.USER, content });
    setContent("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (isResponding) return;
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef?.current) {
      textareaRef.current.style.height = "inherit";
      textareaRef.current.style.height = `${textareaRef.current?.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div
      className={`flex w-full max-w-4xl flex-col items-start rounded-lg border border-gray-600 p-4 backdrop-blur-md ${
        isResponding ? "opacity-50" : ""
      }`}
    >
      {!showInput ? (
        <div className="flex flex-wrap gap-2">
          {initialButtons.map((button, index) => (
            <button
              key={index}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={() => handleButtonClick(button.onClick)}
            >
              {button.label}
            </button>
          ))}
        </div>
      ) : (
        <>
          <textarea
            ref={textareaRef}
            className="w-full bg-transparent text-base text-white text-opacity-80 placeholder-gray-400 outline-none"
            placeholder="Send a reply.."
            value={content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <div className="items-between flex w-full flex-row">
            <p className="mt-2 text-base text-white text-opacity-40">
              {content?.length ?? 0}/2000
            </p>
            <div className="mt-2 flex w-full items-center justify-end">
              <button
                onClick={handleSend}
                className="h-8 w-8 rounded-full border border-gray-400 bg-white text-black"
                disabled={isResponding}
                data-tooltip-id="tooltip_chatinput"
                data-tooltip-content="Send message"
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
          </div>
        </>
      )}
      <Tooltip
        id="tooltip_chatinput"
        style={{
          backgroundColor: "#353535",
          color: "#EDEDED",
          marginTop: -2,
        }}
      />
    </div>
  );
};