import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const CodeComponent: React.FC<ComponentProps> = () => (
  <h1>Code Component</h1>
);
