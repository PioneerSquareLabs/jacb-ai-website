import { type Command } from "~/types";
import AnsiToHtml from "ansi-to-html";
import { useRef, useEffect } from "react";

// Create an instance of the ansi-to-html converter to pretty print terminal commands
const convert = new AnsiToHtml({
  fg: "#FFF", // Default white foreground color for text
  bg: "#000", // Default black background color for terminal
  newline: true, // Convert newline characters to <br/>
  escapeXML: true, // Escape any XML entities to prevent XSS attacks
});

type ComponentProps = {
  commands?: Command[];
};

export const TerminalComponent: React.FC<ComponentProps> = ({ commands }) => {
  // Function to convert ANSI to HTML
  const renderResponse = (response: string) => {
    return { __html: convert.toHtml(response) };
  };
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [commands]);

  return (
    <div className="flex h-full min-h-full w-full flex-grow flex-col p-2 pt-0">
      <div className="w-full py-2">
        <h2 className="text-lg font-semibold text-white">Terminal</h2>
        <hr className="my-2 border-t border-gray-700" />
      </div>
      <div className="hide-scrollbar h-full overflow-auto rounded-lg border border-blueGray-700 bg-black p-4 font-mono text-sm text-white">
        {commands && commands.length > 0 ? (
          commands.map(({ command, response }, index) => (
            <div key={index}>
              <div className="my-2 flex items-center space-x-1 font-semibold ">
                <span className="text-green-400">$</span>
                <span className="text-gray-300">{command}</span>
              </div>
              <div
                className="text-blueGray-400"
                dangerouslySetInnerHTML={renderResponse(response)}
              />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            No commands present for this task.
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default TerminalComponent;
