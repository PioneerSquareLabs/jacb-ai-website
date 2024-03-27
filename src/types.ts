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
