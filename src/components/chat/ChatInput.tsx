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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length > 3000) {
      toast.error("Message limit is 3000 characters");
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

  return (
    <div className="flex w-full items-center justify-between p-3">
      <textarea
        ref={textareaRef}
        className="flex-1 resize-none rounded-md bg-gray-700 p-2 text-white placeholder-gray-400"
        placeholder="Type your message here..."
        onChange={handleChange}
        value={content}
      />
      <button
        className="ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white"
        onClick={handleSend}
        disabled={isResponding}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
};
