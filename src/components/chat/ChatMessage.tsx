import { type FC, useState, useEffect } from "react";
import { Role, type Message } from "~/types";
import Markdown, { type Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  message: Message;
  isResponding?: boolean;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  const [content, setContent] = useState<string>(message.content);

  useEffect(() => {
    setContent(message.content);
  }, [message.content, message.role]);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  const renderers: Partial<Components | any> = {
    code: ({
      node,
      inline,
      className,
      children,
      ...props
    }: {
      node: any;
      inline: any;
      className: any;
      children: any;
    }) => {
      const match = /language-(\w+)/.exec((className as string) ?? "");
      return !inline && match ? (
        <div className="relative">
          <button
            className="absolute right-2 top-0 rounded bg-gray-800 p-1 text-white"
            onClick={() => copyToClipboard(String(children))}
          >
            <FontAwesomeIcon icon={faClipboard} />
          </button>
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div
      className={`flex flex-col ${message.role === Role.ASSISTANT ? "items-start" : "items-end"}`}
    >
      <ToastContainer />
      {content?.length > 0 && (
        <div
          className={`markdown flex flex-col ${message.role === Role.ASSISTANT ? "border border-gray-500 " : "bg-gradient-to-l from-gray-500/80 to-gray-600/80"} hide-scrollbar max-w-[95%] rounded-md px-4 py-2 text-white shadow-md`}
          style={{ overflowWrap: "anywhere" }}
        >
          <Markdown components={renderers}>{content}</Markdown>
        </div>
      )}
    </div>
  );
};
