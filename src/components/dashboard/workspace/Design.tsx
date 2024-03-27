import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const DesignComponent: React.FC<ComponentProps> = () => (
  <h1>DesignComponent</h1>
);
