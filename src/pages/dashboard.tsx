import { ChatCompletionStreamingRunner } from "openai/lib/ChatCompletionStreamingRunner";
import React, { useEffect, useRef, useState } from "react";
import { Chat } from "~/components/chat/Chat";
import Tasks from "~/components/dashboard/tasks";
import Workspace from "~/components/dashboard/workspace";
import {
  InternalEventType,
  type Issue,
  SidebarIcon,
  TaskStatus,
  TaskType,
  type InternalEvent,
  type Plan,
  PLANS,
  type PromptDetails,
  type CodeFile,
  type Command,
  SAMPLE_TASKS,
} from "~/types";
import { createClient } from "@supabase/supabase-js";

import { type Message, type Task, Role } from "~/types";
import {
  extractFilePathWithArrow,
  findTaskForInternalEvent,
  getSnapshotUrl,
  shallowSnakeCaseToCamelCase,
} from "~/utils";

const TOP_MENU_HEIGHT = 0;

const DEFAULT_PROMPT_1 =
  "👋 I’m JACoB, nice to meet you! Tell me what to do and I'll ask some clarifying questions, then I'll create a new GitHub issue and start working on it.";
const DEFAULT_PROMPT_2 = `What would you like to get done today?`;

// Initialize Supabase client
const supabaseUrl = "https://yeoamgnozxgaklixkfnt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inllb2FtZ25venhnYWtsaXhrZm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2MzA5NjMsImV4cCI6MjAyNDIwNjk2M30.PxmPBNFaUYJxwAGzbBpbDl2LztWIRIRj3bVfnAfVc2I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DashboardPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const [responding, setResponding] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);
  const [selectedIcon, setSelectedIcon] = useState<SidebarIcon>(
    SidebarIcon.Plan,
  );

  useEffect(() => {
    const updateTask = (task: Task) => {
      const existingTask = tasks.find((t) => t.id === task.id);
      if (existingTask) {
        setTasks((tasks) =>
          tasks.map((t) => {
            if (t.id === task.id) {
              return task;
            }
            return t;
          }),
        );
      } else {
        setTasks((tasks) => [...tasks, task]);
      }
    };

    const convertPayloadToCode = (
      codeFile: CodeFile,
      parentTask: Task | undefined,
    ) => {
      if (!codeFile || !parentTask) {
        console.error("Invalid code or task: ", codeFile, parentTask);
        return;
      }

      // If codeFiles doesn't exist, initialize it
      if (!parentTask.codeFiles) {
        parentTask.codeFiles = [];
      }

      // Find the index of the existing codeFile
      const index = parentTask.codeFiles.findIndex(
        (file) => file.fileName === codeFile.fileName,
      );

      // If codeFile exists, update it, otherwise add it
      if (index !== -1) {
        parentTask.codeFiles[index] = codeFile;
      } else {
        parentTask.codeFiles.push(codeFile);
      }

      updateTask(parentTask);
    };

    const convertPayloadToPrompt = (
      prompt: PromptDetails,
      parentTask: Task | undefined,
    ) => {
      if (!prompt || !parentTask) {
        console.error("Invalid prompt or task: ", prompt, parentTask);
        return;
      }

      // If prompts doesn't exist, initialize it
      if (!parentTask.prompts) {
        parentTask.prompts = [];
      }

      // Find the index of the existing prompt (use the timestamp as a unique identifier)
      const index = parentTask.prompts.findIndex(
        (p) =>
          p.metadata &&
          prompt.metadata &&
          p.metadata.timestamp === prompt.metadata.timestamp,
      );

      // If prompt exists, update it, otherwise add it
      if (index !== -1) {
        parentTask.prompts[index] = prompt;
      } else {
        parentTask.prompts.push(prompt);
      }

      updateTask(parentTask);
    };

    const convertPayloadToTask = (task: Task) => {
      if (!task) {
        return null;
      }

      // set the plan
      let plan: Plan[] = [];
      switch (task.type) {
        case TaskType.CREATE_NEW_FILE:
          plan = PLANS[TaskType.CREATE_NEW_FILE];
          break;
        case TaskType.EDIT_FILES:
          plan = PLANS[TaskType.EDIT_FILES];
          break;
        case TaskType.CODE_REVIEW:
          plan = PLANS[TaskType.CODE_REVIEW];
          break;
        default:
          console.error("Unknown task type: ", task.type);
          break;
      }
      task.plan = plan;
      // upsert the task to the tasks array
      updateTask(task);
    };

    const convertPayloadToIssue = (
      issue: Issue,
      parentTask: Task | undefined,
    ) => {
      if (!issue || !parentTask) {
        console.error("Invalid issue or task: ", issue, parentTask);
        return;
      }
      parentTask.issue = issue;

      // Set imageUrl
      parentTask.imageUrl = getSnapshotUrl(issue.description);
      updateTask(parentTask);
    };

    const convertPayloadToCommand = (
      command: Command,
      parentTask: Task | undefined,
    ) => {
      if (!command) {
        return null;
      }
      if (!parentTask) {
        console.error("No parent task found for command: ", command);
        return;
      }

      // set the command to the parent task, and add the command to the tasks array
      parentTask.commands = parentTask.commands
        ? [...parentTask.commands, command]
        : [command];
      updateTask(parentTask);
    };

    const convertPayloadToInternalEvent = (event: InternalEvent | null) => {
      if (!event) {
        return null;
      }
      const eventType: InternalEventType = event.type;
      // convert the payload from snake case to camel case
      const camelCasePayload = shallowSnakeCaseToCamelCase(event.payload);
      const camelCaseEvent = shallowSnakeCaseToCamelCase(
        event,
      ) as InternalEvent;
      const parentTask = findTaskForInternalEvent(tasks, camelCaseEvent);

      switch (eventType) {
        case InternalEventType.Task:
          convertPayloadToTask(camelCasePayload as Task);
          setSelectedIcon(SidebarIcon.Plan);
          break;
        case InternalEventType.Issue:
          convertPayloadToIssue(camelCasePayload as Issue, parentTask);
          setSelectedIcon(SidebarIcon.Issues);
          break;
        case InternalEventType.Prompt:
          convertPayloadToPrompt(camelCasePayload as PromptDetails, parentTask);
          setSelectedIcon(SidebarIcon.Prompts);
          break;
        case InternalEventType.Code:
          convertPayloadToCode(camelCasePayload as CodeFile, parentTask);
          setSelectedIcon(SidebarIcon.Code);
          break;
        case InternalEventType.Command:
          convertPayloadToCommand(camelCasePayload as Command, parentTask);
          setSelectedIcon(SidebarIcon.Terminal);
        default:
          console.error("Unknown event type: ", eventType);
          break;
      }
    };

    const supabaseFetch = async () => {
      supabase
        .channel("internal_events_channel") // Name your channel
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "internal_events" },
          (payload) => {
            console.log("Change received!", payload);
            convertPayloadToInternalEvent(payload.new as InternalEvent);
          },
        )
        .subscribe();

      // Cleanup on unmount
      return async () => {
        await supabase.removeAllChannels();
      };
    };
    void supabaseFetch();
  }, [tasks]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setIsAtBottom(true);
  };

  const checkIfAtBottom = () => {
    if (!sidebarRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
    const _isAtBottom = scrollHeight - scrollTop <= clientHeight + 120; // give a little buffer so the arrow isn't covering action items
    setIsAtBottom(_isAtBottom);
  };

  useEffect(() => {
    const chatSidebar = sidebarRef.current;
    if (!chatSidebar) return;

    chatSidebar.addEventListener("scroll", checkIfAtBottom);

    return () => {
      chatSidebar.removeEventListener("scroll", checkIfAtBottom);
    };
  }, [sidebarRef]);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setHeight(windowHeight - TOP_MENU_HEIGHT);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (messages?.length > 0 && messagesEndRef.current && isAtBottom) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isAtBottom]);

  useEffect(() => {
    setMessages([
      {
        role: Role.ASSISTANT,
        content: DEFAULT_PROMPT_1,
      },
      {
        role: Role.ASSISTANT,
        content: DEFAULT_PROMPT_2,
      },
    ]);
  }, []);

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message];

    setMessages(updatedMessages);
    setLoading(true);
    setResponding(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: updatedMessages,
        prompt,
      }),
    });

    if (!response.ok || !response.body) {
      setLoading(false);
      throw new Error(response.statusText);
    }

    const runner = ChatCompletionStreamingRunner.fromReadableStream(
      response.body,
    );
    if (!runner) {
      setLoading(false);
      throw new Error("No reader");
    }
    let completedText = "";
    let isFirst = true;

    while (!runner.ended) {
      for await (const chunk of runner) {
        // The chunk is already a parsed object, but let's ensure it's in the expected format
        if (!chunk.choices[0]?.delta) {
          continue;
        }
        const chunkValue = chunk.choices[0].delta.content ?? ""; // Assuming chunk.data is the content we're interested in

        completedText += chunkValue;
        if (isFirst) {
          isFirst = false;
          setMessages((messages) => [
            ...messages,
            {
              role: Role.ASSISTANT,
              content: chunkValue,
            },
          ]);
        } else {
          setMessages((messages) => {
            const lastMessage = messages[messages.length - 1];

            if (lastMessage) {
              const updatedMessage = {
                ...lastMessage,
                content: completedText,
              };
              return [...messages.slice(0, -1), updatedMessage];
            }
            return messages;
          });
        }
      }
    }

    setResponding(false);
  };

  const handleReset = () => {
    setMessages([
      {
        role: Role.ASSISTANT,
        content: DEFAULT_PROMPT_1,
      },
    ]);
  };

  const handleCreateNewTask = () => {
    // first, get all the messages that are from the assistant and try to find the most recent the gitub issue mentioned by the assistant (note that the messages will need to be read one by one from last to first in the messages array)
    // The issue will be surrounded by code blocks with triple backticks and the work github on the first line
    // i.e. ```github <here is the issue to extract>```
    const assistantMessages = messages.filter((m) => m.role === Role.ASSISTANT);
    let issue;
    for (let i = assistantMessages.length - 1; i >= 0; i--) {
      const message = assistantMessages[i];
      if (message?.content.includes("```")) {
        // use a regex to extract the issue
        const regex = /```markdown(.*?)```/s;
        const match = message.content.match(regex);
        if (match) {
          issue = match[1];
          break;
        } else {
          // try to just find anything inside of triple backticks
          const regex = /```(.*?)```/s;
          const match = message.content.match(regex);
          if (match) {
            issue = match[1];
            break;
          }
        }
      }
    }
    if (!issue) {
      console.error("No issue found in messages");
      console.log("messages", messages);
      return;
    }

    // next, create a new Task object. Here is the type info:
    // For now, just set the status to TaskStatus.TODO and storyPoints to 1
    // The id can be a random string, and the name can be the first line of the description
    // The description should be the full extracted issue
    const issueTitle =
      issue?.split("\n")[0]?.trim() ?? "Create New GitHub Issue";
    const newFileName = extractFilePathWithArrow(issueTitle);
    const newTask: Task = {
      id: Math.random().toString(36).substring(7),
      name: issueTitle,
      type: newFileName ? TaskType.CREATE_NEW_FILE : TaskType.EDIT_FILES,
      description: issue,
      storyPoints: 1,
      status: TaskStatus.TODO,
    };

    // finally, add the new task to the tasks array
    setTasks((tasks) => [...tasks, newTask]);
  };

  const onRemoveTask = (taskId: string) => {
    console.log("Removing task: ", taskId);
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId));
  };

  const onEditTask = (taskId: string, newName: string) => {
    console.log("Editing task: ", taskId);
  };

  const onStartTask = (taskId: string) => {
    console.log("Starting task: ", taskId);
    // set the task status to in progress
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === taskId) {
          return {
            ...t,
            status: TaskStatus.IN_PROGRESS,
          };
        }
        return t;
      }),
    );
  };

  console.log("tasks", tasks);
  const numTotalTasks = tasks.length;
  const tasksToDo = tasks.filter((t) => t.status === TaskStatus.TODO);
  const tasksInProgressOrDone = tasks.filter(
    (t) => t.status === TaskStatus.IN_PROGRESS || t.status === TaskStatus.DONE,
  );

  return (
    <div className="h-screen w-full  bg-gray-800 ">
      <div
        className={`grid h-full w-full bg-gray-900 ${tasksInProgressOrDone.length ? "grid-cols-12" : "mx-auto max-w-7xl grid-cols-6 bg-gray-900"}`}
      >
        <div className="col-span-4 max-w-7xl bg-gray-900">
          <Chat
            messages={messages}
            loading={loading}
            onSend={handleSend}
            onReset={handleReset}
            onCreateNewTask={handleCreateNewTask}
            isResponding={responding}
            messagesEndRef={messagesEndRef}
            scrollToBottom={scrollToBottom}
            isAtBottom={isAtBottom}
            sidebarRef={sidebarRef}
            checkIfAtBottom={checkIfAtBottom}
          />
        </div>
        <div className="col-span-2 max-w-7xl bg-gray-900" style={{ height }}>
          <Tasks
            tasks={tasks}
            onRemove={onRemoveTask}
            onEdit={onEditTask}
            onStart={onStartTask}
          />
        </div>
        <div
          className={`col-span-6 bg-gray-900/90 ${tasksInProgressOrDone.length ? "flex" : "hidden"}`}
        >
          <Workspace tasks={tasks} selectedIcon={selectedIcon} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
