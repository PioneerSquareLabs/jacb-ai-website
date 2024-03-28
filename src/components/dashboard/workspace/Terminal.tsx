import { SAMPLE_COMMANDS, type Task } from "~/types";
import { type Command } from "~/types";

type ComponentProps = {
  task?: Task;
  commands?: Command[];
};
// The TerminalComponent
export const TerminalComponent: React.FC<ComponentProps> = ({
  commands = SAMPLE_COMMANDS,
}) => {
  return (
    <div className="flex h-full min-h-full w-full flex-grow flex-col p-2 pt-0">
      <div className="w-full py-2 ">
        <h2 className="text-lg font-semibold text-white">Terminal</h2>
        <hr className="my-2 border-t border-gray-700" />
      </div>
      <div className="hide-scrollbar h-full overflow-auto rounded-lg border border-blueGray-700 bg-black p-4 font-mono text-sm text-white">
        {commands.map(({ command, response }, index) => (
          <div key={index}>
            <div className="flex items-center space-x-1">
              <span className="text-white">$</span>
              <span className="text-gray-300">{command}</span>
            </div>
            <div className="text-blueGray-500">{response}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalComponent;
