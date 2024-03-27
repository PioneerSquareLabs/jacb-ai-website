import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const IssuesComponent: React.FC<ComponentProps> = () => (
  <h1>IssuesComponent</h1>
);
