export enum Role {
  ASSISTANT = "assistant",
  USER = "user",
}

export type Message = {
  role: Role;
  content: string;
};

export type Task = {
  id: string;
  name: string;
  description: string;
  storyPoints: number;
  completed: boolean;
};

export type Command = {
  command: string;
  response: string;
  directory?: string;
};

export enum Language {
  TypeScript = "typescript",
  JavaScript = "javascript",
}

export type CodeFile = {
  fileName: string;
  filePath: string;
  language: Language;
  codeBlock: string;
};

export type Plan = {
  id: string;
  title: string;
  description: string;
  position: number;
  isComplete: boolean;
};

export enum SidebarIcon {
  None = "None",
  Code = "Code",
  Design = "Design",
  Terminal = "Terminal",
  Plan = "Plan",
  Prompts = "Prompts",
  Issues = "Issues",
  PullRequests = "Pull Requests",
}

export const SAMPLE_TASKS: Task[] = [
  {
    id: "1",
    name: "Refactor Login Component",
    description:
      "The Login component has grown quite large and is handling too many responsibilities. It needs to be refactored into smaller, more manageable components.",
    storyPoints: 5,
    completed: true,
  },
  {
    id: "2",
    name: "Fix Bug in User Registration",
    description:
      "There's a bug in the user registration flow where the form doesn't properly validate the user's email address. This needs to be fixed.",
    storyPoints: 3,
    completed: true,
  },
  {
    id: "3",
    name: "Add Tests for Profile Page",
    description:
      "The Profile page currently has no tests. We need to add unit and integration tests to ensure it's working correctly.",
    storyPoints: 8,
    completed: false,
  },
  {
    id: "4",
    name: "Implement Dark Mode",
    description:
      "Users have been asking for a dark mode. We need to implement this across the entire application.",
    storyPoints: 3,
    completed: false,
  },
  {
    id: "5",
    name: "Optimize Image Loading",
    description:
      "Images on the site are currently loaded all at once, which is causing performance issues. We need to implement lazy loading for images.",
    storyPoints: 5,
    completed: false,
  },
];

export const SAMPLE_COMMANDS: Command[] = [
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

export const SAMPLE_CODE_FILES: CodeFile[] = [
  {
    fileName: "index.tsx",
    filePath: "/src/components/index.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));`,
  },
  {
    fileName: "App.tsx",
    filePath: "/src/components/App.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
);
`,
  },
  {
    fileName: "Home.tsx",
    filePath: "/src/components/Home.tsx",
    language: Language.TypeScript,
    codeBlock: `import React from "react";
    import { Link } from "react-router-dom";
    import { useQuery } from "@apollo/client";

    const Home: React.FC = () => {
      const { data, loading, error } = useQuery(GET_HOME_PAGE_DATA);

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error! {error.message}</div>;

      return (
        <div>
          <h1>Welcome to our site!</h1>
          <p>{data?.homePageContent}</p>
          <Link to="/about">Learn more</Link>
        </div>
      );
    };
    `,
  },
];

export const SAMPLE_PLAN: Plan[] = [
  {
    id: "1",
    title: "Set Up the File Structure",
    description:
      "Create a new TypeScript file named ElevateYourCodingPanel.tsx in the src/components/ directory.",
    position: 1,
    isComplete: true,
  },
  {
    id: "2",
    title: "Transfer Initial Code",
    description:
      "Copy the provided JSX code into the newly created file as the starting point for the component.",
    position: 2,
    isComplete: true,
  },
  {
    id: "3",
    title: "Validate and Adjust CSS Classes",
    description:
      "Go through the JSX code and ensure all TailwindCSS classes are valid according to the TailwindCSS documentation. Replace any arbitrary values with standard TailwindCSS classes and use custom color names from tailwind.config if they match exactly.",
    position: 3,
    isComplete: true,
  },
  {
    id: "4",
    title: "Replace Placeholder Text",
    description:
      "Identify any placeholder text within the JSX code and replace it with the appropriate content or data bindings as required.",
    position: 4,
    isComplete: true,
  },
  {
    id: "5",
    title: "Implement Additional Logic",
    description:
      "Write any necessary functions or hooks to make the component functional, such as form submission logic or state management for the input field.",
    position: 5,
    isComplete: false,
  },
  {
    id: "6",
    title: "Ensure Design Fidelity",
    description:
      "Adjust the layout using flexbox and other modern CSS features provided by TailwindCSS to match the provided design as closely as possible without hardcoding sizes.",
    position: 6,
    isComplete: false,
  },
  {
    id: "7",
    title: "Integrate Icons and Images",
    description:
      "Replace placeholder icons with actual icons using the FontAwesomeIcon component from Font Awesome, and replace placeholder images with the correct image paths, ensuring the images are saved in the public folder.",
    position: 7,
    isComplete: false,
  },
  {
    id: "8",
    title: "Handle Click Events",
    description:
      "Implement the necessary event handlers for any clickable elements, such as buttons or links, to ensure they perform the intended actions when interacted with.",
    position: 8,
    isComplete: false,
  },
  {
    id: "9",
    title: "Test the Component",
    description:
      "Thoroughly test the component to ensure it looks and functions as expected across different screen sizes and browsers.",
    position: 9,
    isComplete: false,
  },
  {
    id: "10",
    title: "Code Review and Refinement",
    description:
      "Review the code for any potential improvements or optimizations and make necessary refinements to ensure the code is clean, well-documented, and follows best practices.",
    position: 10,
    isComplete: false,
  },
];

export type Comment = {
  id: number;
  username: string;
  createdAt: string;
  content: string;
};

export type Issue = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  comments: Comment[];
  author: string;
  assignee: string;
  status: "open" | "closed";
  link: string;
};

export type PullRequest = {
  id: number;
  title: string;
  description: string;
  link: string;
  status: "open" | "closed" | "merged";
  createdAt: string;
  author: string;
  comments: Comment[];
  changedFiles: number;
  additions: number;
  deletions: number;
};

export const SAMPLE_ISSUE: Issue = {
  id: 1,
  title: "Add new timezone parameter to the posts API",
  description:
    `**Objective:**\n` +
    `Add an input field called \`timezone\` to the \`hello\` API (alongside the \`text\` parameter).\n` +
    `The \`greeting\` response from the \`hello\` API should be updated to include the \`timezone\` in the string (along with \`Hello\` and the \`text\` parameter).\n` +
    `Update the \`Home\` page to retrieve the current timezone from the browser and pass that parameter to the API.\n\n` +
    `@jacob-ai-bot, please implement these changes and submit a pull request for review.`,
  createdAt: "2024-03-28T09:00:00Z",
  author: "jacob-ai-bot",
  comments: [
    {
      id: 1,
      username: "jacob-ai-bot",
      createdAt: "2024-03-28T10:00:00Z",
      content:
        "I've started working on this issue. The `timezone` field will be optional with a default value of 'UTC'.",
    },
    {
      id: 2,
      username: "kleneway",
      createdAt: "2024-03-28T11:00:00Z",
      content:
        "Thanks for the update. Ensure that the implementation handles time zone conversions accurately.",
    },
  ],
  assignee: "kleneway",
  status: "open",
  link: "https://github.com/PioneerSquareLabs/t3-starter-template/issues/284",
};

export const SAMPLE_PR: PullRequest = {
  id: 284,
  title: "Implement time zone conversions",
  description: "This PR adds functionality to convert time zones.",
  link: "https://github.com/PioneerSquareLabs/t3-starter-template/pull/284",
  status: "open",
  createdAt: "2024-03-28T11:00:00Z",
  author: "kleneway",
  comments: [
    {
      id: 1,
      username: "reviewer1",
      content: "Looks good to me. Just a few minor changes needed.",
      createdAt: "2024-03-29T11:00:00Z",
    },
    {
      id: 2,
      username: "reviewer2",
      content:
        "Thanks for the update. Ensure that the implementation handles time zone conversions accurately.",
      createdAt: "2024-03-30T11:00:00Z",
    },
  ],
  changedFiles: 3,
  additions: 50,
  deletions: 10,
};

export type Prompt = {
  promptType: "User" | "System" | "Assistant";
  prompt: string;
  timestamp: string;
};

export type PromptDetails = {
  metadata: {
    timestamp: string;
    cost: number;
    tokens: number;
    duration: number;
    model: string;
  };
  request: {
    prompts: Prompt[];
  };
  response: {
    prompt: Prompt;
  };
};

const SAMPLE_PROMPT_DETAILS = {
  metadata: {
    timestamp: "2024-03-28T12:00:00Z",
    tokens: 1234,
    cost: 1.23,
    duration: 450,
    model: "gpt-3.5-turbo",
  },
  request: {
    prompts: [
      {
        promptType: "System",
        prompt:
          "Act as an expert-level front-end software engineer and designer. The IMAGE above is EXACTLY the design that you MUST implement with code.\nA low-level developer may have provided some basic code or a FigML file to get you started. This code WILL have errors and you MUST use this design to correct for those errors. \nIf no code was provided or you can not correct for the errors, you MUST use the design to write your own code. Your code MUST be pixel-perfect! If you can achieve this on the first try, you will get a $1,000,000 bonus.\nYou MUST use this code ONLY as a starting point, but you MUST follow all the instructions. Take a deep breath and begin.",
        timestamp: "2024-03-28T12:00:00Z",
      },
      {
        promptType: "User",
        prompt:
          "Act as an expert-level TypeScript Front-End TailwindCSS software developer.\nYour job is to take a representation of a Figma design and convert it into JSX to be used in a React functional component. \nThe Figma design will be provided in a format called FigML, which is a YAML representation of a Figma file.\n  \n=== START FigML ===\n- MacBook Pro 16\" - 89 (FRAME)\n\t(0, 0) w-[1728px] h-[1117px] bg-[#0d0c22]\n\t- Frame 1000003243 (FRAME)\n\t\t(513, 314) w-[701px] h-[74px]\n\t\t- Select Personas (TEXT)\n\t\t\t(792, 314) text-[18] font-medium color-[#f8f7f4]\n\t\t\tSelect Personas\n\t\t- We’ve generated the following personas based on your study description. Select one or more of these or upload your own. (TEXT)\n\t\t\t(513, 344) text-[18] text-align-[center] color-[rgba(192, 189, 255, 0.5)]\n\t\t\tWe’ve generated the following personas based on your study description. Select one or more of these or upload your own.\n\t- Frame 1000003245 (FRAME)\n\t\t(1302, 397) w-[102px] h-[17px]\n\t\t- Upload my own (TEXT)\n\t\t\t(1302, 397) text-[14] color-[#fface4]\n\t\t\tUpload my own\n\t- upload (INSTANCE)\n\t\t(1277, 400) w-[14px] h-[14px] bg-[]\n\t- Frame 20 (FRAME)\n\t\t(301, 430) w-[1103px] h-[405px]\n\t\t- Frame 23 (INSTANCE)\n\t\t\t(301, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(345, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tSustainability Sarah\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(345, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n\t\t- Frame 24 (INSTANCE)\n\t\t\t(672.3, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(716.3, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tBudget-Conscious Bryce\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(716.3, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n\t\t- Frame 25 (INSTANCE)\n\t\t\t(1043.7, 430) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t(1087.7, 474) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\tHealthy Hana\n\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t(1087.7, 508) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\tThis persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n\t\t- Frame 1000003246 (FRAME)\n\t\t\t(301, 785) w-[1103px] h-[344px]\n\t\t\t- Frame 23 (INSTANCE)\n\t\t\t\t(301, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(345, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tSustainability Sarah\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(345, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n\t\t\t- Frame 24 (INSTANCE)\n\t\t\t\t(672.3, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(716.3, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tBudget-Conscious Bryce\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(716.3, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n\t\t\t- Frame 25 (INSTANCE)\n\t\t\t\t(1043.7, 785) w-[360px] h-[344px] bg-[rgba(255, 255, 255, 0.1)] rounded-8\n\t\t\t\t- Sustainability Sarah (TEXT)\n\t\t\t\t\t(1087.7, 829) text-[20] letter-spacing-[-0.08em] color-[#f8f7f4]\n\t\t\t\t\tHealthy Hana\n\t\t\t\t- This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that's currently in season. They value knowing the apple's origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities. (TEXT)\n\t\t\t\t\t(1087.7, 863) font-size-[16px] letter-spacing-[-0.05em] color-[rgba(192, 189, 255, 0.5)]\n\t\t\t\t\tThis persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n\t- Frame 18 (FRAME)\n\t\t(1447, 566) w-[36px] h-[36px] bg-[#fface4] border-radius-[100px]\n\t\t- arrow-left (INSTANCE)\n\t\t\t(1453, 572) w-[24px] h-[24px] bg-[]\n\t\t\t- Vector (VECTOR)\n\t\t\t\t(1456, 577) w-[18px] h-[14px] border-2 border-solid border-color-[#0d0c22]\n\t- arrow-left (INSTANCE)\n\t\t(216, 572) w-[24px] h-[24px] bg-[]\n\t\t- Vector (VECTOR)\n\t\t\t(219, 577) w-[18px] h-[14px] border-2 border-solid border-white\n\t- Rectangle 15 (RECTANGLE)\n\t\t(301, 642) w-[1113px] h-[198px] background-[undefined]\n\t- Frame 1000003244 (FRAME)\n\t\t(807, 796) w-[115px] h-[22px]\n\t\t- Load more (TEXT)\n\t\t\t(830, 796) text-[18] color-[rgba(192, 189, 255, 0.5)]\n\t\t\tLoad more\n\t\t- chevron-down (INSTANCE)\n\t\t\t(807, 800) w-[14px] h-[14px] bg-[]\n\t\t\t- Vector (VECTOR)\n\t\t\t\t(809.9, 805.3) w-[8px] h-[4px] border border-solid border-color-[rgba(192, 189, 255, 0.5)]\n=== END FigML ===\n\nHere are some additional instructions: you must reuse mono-buttons.tsx for this. be sure to import the mono button prop interface too.\n\nyou must use a grid for the personas.\nThe attached image is a snapshot of the Figma design. Use a combination of the FigML file and the image to produce a pixel-perfect reproduction of this design.\n\nWrite the JSX code for the FigML file.\nThis JSX code will be used in a React functional component.\nONLY respond with the JSX. Do not include backticks or any comments.\nThis output will be rendered directly by React and anything other than valid JSX will throw a serious error in the application!\n",
        timestamp: "2024-03-28T12:00:05Z",
      },
    ],
  },
  response: {
    prompt: {
      promptType: "Assistant",
      prompt:
        '``` javascript\nfunction MacBookPro16() {\n  return (\n    <div className="w-full h-full bg-indigo-900">\n      <div className="flex justify-center items-center flex-col">\n        <div className="mt-20">\n          <h1 className="text-lg font-medium text-gray-100">Select Personas</h1>\n          <p className="text-lg text-center text-indigo-200 mt-2 opacity-50">\n            We’ve generated the following personas based on your study description. Select one or more of these or upload your own.\n          </p>\n        </div>\n        <div className="flex justify-end items-center mt-4">\n          <button className="text-sm text-pink-300">Upload my own</button>\n        </div>\n      </div>\n      <div className="grid grid-cols-3 gap-4 mt-8 px-8">\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Sustainability Sarah</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a sustainability-minded college student who wants to purchase a locally-grown apple that\'s currently in season. They value knowing the apple\'s origin, and while they might be budget-conscious, supporting local agriculture and getting the freshest product are their priorities.\n          </p>\n        </div>\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Budget-Conscious Bryce</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a budget-conscious single parent utilizing SNAP benefits. Their focus is quickly finding an affordable, nutritious apple that is SNAP-eligible.\n          </p>\n        </div>\n        <div className="bg-white bg-opacity-10 rounded-xl p-4">\n          <h2 className="text-xl text-gray-100">Healthy Hana</h2>\n          <p className="text-base text-indigo-200 opacity-50 mt-2">\n            This persona represents a health-conscious, middle-aged individual seeking to buy an organic apple. They prioritize product quality, and are likely willing to pay more for a premium option.\n          </p>\n        </div>\n      </div>\n      <div className="flex justify-center items-center mt-20">\n        <button className="text-lg text-indigo-200 opacity-50">Load more</button>\n      </div>\n      <div className="absolute top-1/3 right-8">\n        {/* SVG icon for right arrow will need to be added using Lucide package */}\n      </div>\n      <div className="absolute top-1/3 left-8">\n        {/* SVG icon for left arrow will need to be added using Lucide package */}\n      </div>\n    </div>\n  );\n}\n```',
      timestamp: "2024-03-28T12:00:10Z",
    },
  },
};

export const SAMPLE_PROMPT_DETAILS_ARRAY: PromptDetails[] = [
  ...Array(100).fill(SAMPLE_PROMPT_DETAILS),
];
