import { type Task } from "~/types";

type ComponentProps = {
  task?: Task;
};

export const PlanComponent: React.FC<ComponentProps> = () => (
  <h1>PlanComponent</h1>
);
