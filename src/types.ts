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
