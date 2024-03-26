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
