import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const PullRequestsComponent: React.FC<ComponentProps> = () => (
  <h1> PullRequestsComponent</h1>
);
