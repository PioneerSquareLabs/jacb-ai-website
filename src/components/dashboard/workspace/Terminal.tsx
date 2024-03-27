import { type Task } from "~/types";

// Define the Command type
type Command = {
  command: string;
  response: string;
  directory?: string;
};

type ComponentProps = {
  task?: Task;
  commands?: Command[];
};

const sampleCommands: Command[] = [
  {
    command: "ls",
    response: "project1 project2 project3 README.md package.json node_modules",
  },
  {
    command: "cd project1",
    response: "",
    directory: "/project1",
  },
  {
    command: "ls",
    response: "src tests package.json tsconfig.json",
  },
  {
    command: "cat README.md",
    response: "This is a sample README for project1.",
  },
  {
    command: "cd ..",
    response: "",
    directory: "/",
  },
  {
    command: "cd project2",
    response: "",
    directory: "/project2",
  },
  {
    command: "ls",
    response: "app tests package.json webpack.config.js",
  },
  {
    command: "cat package.json",
    response: `{
    "name": "project2",

}`,
  },
  {
    command: "cd /",
    response: "",
    directory: "/",
  },
];

// The TerminalComponent
export const TerminalComponent: React.FC<ComponentProps> = ({
  commands = sampleCommands,
}) => {
  return (
    <div className="border-blueGray-700 h-full w-full rounded-lg border bg-black p-4 font-mono text-sm text-white">
      {commands.map(({ command, response, directory }, index) => (
        <div key={index}>
          <div className="flex items-center space-x-1">
            <span className="text-white">$</span>
            <span className="text-gray-300">{command}</span>
          </div>
          <div className="text-blueGray-500">{response}</div>
        </div>
      ))}
    </div>
  );
};
