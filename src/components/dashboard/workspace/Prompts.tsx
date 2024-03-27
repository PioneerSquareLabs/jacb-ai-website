import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const PromptsComponent: React.FC<ComponentProps> = () => (
  <h1>PromptsComponent</h1>
);
