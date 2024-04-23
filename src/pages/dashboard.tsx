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
  type PromptDetails,
  type CodeFile,
  type Command,
  type PullRequest,
  type NewIssue,
} from "~/types";
import { PLANS } from "~/data/plans";
import { createClient } from "@supabase/supabase-js";

import { type Message, type Task, Role } from "~/types";
import {
  extractFilePathWithArrow,
  findTaskForInternalEvent,
  getIssueDescriptionFromMessages,
  getSnapshotUrl,
  shallowSnakeCaseToCamelCase,
} from "~/utils";
import ChatHeader from "~/components/chat/ChatHeader";
import { useSupabaseSubscribe, useFetch } from "~/hooks/hooks";
import { convertPayloadToTask, convertPayloadToCode, convertPayloadToCommand, convertPayloadToIssue, convertPayloadToPrompt, convertPayloadToPullRequest } from "~/utils/taskUtils";
import { fetchPlanStatus, fetchRepos, fetchIssues, updateIssue, createIssue } from "~/api/apiService";

const TOP_MENU_HEIGHT = 0;

const CREATE_ISSUE_PROMPT =
  "Looks like our task queue is empty. What do you need to get done next? Give me a quick overview and then I'll ask some clarifying questions. Then I can create a new GitHub issue and start working on it.";

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

  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [selectedIcon, setSelectedIcon] = useState<SidebarIcon>(
    SidebarIcon.Plan,
  );
  const [recentlyUpdatedTaskIds, setRecentlyUpdatedTaskIds] = useState<
    string[]
  >([]);
  const [repos, setRepos] = useState<string[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("");
  const [issues, setIssues] = useState<Issue[]>([]);

  const lastFetchTimes = useRef<Record<string, number>>({});

  useEffect(() => {
    const fetchPlanStatus = async (task: Task) => {
      const now = Date.now();
      const lastFetchTime = lastFetchTimes.current[task.id] ?? 0;

      if (
        task.status === TaskStatus.IN_PROGRESS &&
        now - lastFetchTime < 5000
      ) {
        return;
      }

      lastFetchTimes.current[task.id] = now;
      setRecentlyUpdatedTaskIds((ids) => ids.filter((id) => id !== task.id));

      const response = await fetch("/api/dashboard/plan-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      const { statusDescription, isMostRecentStepCompleted } = data;
      let currentPlanStep = data.currentPlanStep ?? 0;

      if (task.status === TaskStatus.DONE) {
        // set the current plan step to the last step
        currentPlanStep = (task.plan?.length ?? 1) - 1;
      }
      setTasks((tasks) =>
        tasks.map((t) => {
          if (t.id === task.id) {
            // mark all the previous plan steps as completed
            t.plan?.forEach((step, index) => {
              if (
                (t.status === TaskStatus.DONE || index < currentPlanStep) ??
                0
              ) {
                step.isComplete = true;
              }
            });
            return {
              ...t,
              currentPlanStep,
              statusDescription:
                isMostRecentStepCompleted && t.status !== TaskStatus.DONE
                  ? statusDescription
                  : t.statusDescription,
            } as Task;
          }
          return t;
        }),
      );
    };

    for (const taskId of recentlyUpdatedTaskIds) {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        void fetchPlanStatus(task);
      }
    }
  }, [tasks, recentlyUpdatedTaskIds]);

  useEffect(() => {
    // call the /api/jacob/repos endpoint to get the list of repos
    const fetchRepos = async () => {
      const response = await fetch("/api/jacob/repos");

      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Failed to fetch repos:", errorMessage);
        return;
      }
      const data = (await response.json()) as {
        repos: string[];
        message: string;
      };
      setRepos(data.repos);
    };
    void fetchRepos();
  }, []);

  useEffect(() => {
    // call the /api/jacob/issues endpoint to get the list of issues
    const fetchIssues = async (selectedRepo: string) => {
      const response = await fetch("/api/jacob/issues?repo=" + selectedRepo);

      if (!response.ok) {
        const errorMessage = await response.text();
        console.log("Failed to fetch issues:", errorMessage);
        return;
      }
      const data = (await response.json()) as {
        issues: Issue[];
      };
      setIssues(data.issues);
      // TEMP: go through each issue and create a new task for each one
      for (const [index, issue] of data.issues.entries()) {
        const newTask: Task = {
          id: Math.random().toString(36).substring(7),
          repo: selectedRepo,
          name: issue.title,
          type: issue.filesToCreate?.length
            ? TaskType.CREATE_NEW_FILE
            : TaskType.EDIT_FILES,
          description: issue.description,
          storyPoints: 1,
          status: TaskStatus.TODO,
          issue,
        };
        setTasks((tasks) => [...tasks, newTask]);
        if (index === 0) {
          setMessages([
            {
              role: Role.ASSISTANT,
              content: `I found a new open issue in the *${selectedRepo}* repo: **${issue.title}**`,
            },
            {
              role: Role.ASSISTANT,
              content: `Can I help you with this?`,
            },
          ]);
        }
      }
    };

    if (selectedRepo?.length > 0) {
      void fetchIssues(selectedRepo);
    }
  }, [selectedRepo]);

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

      // check to see if the task already exists. If it does, update only the fields coming from the payload (don't overwrite the plan, commands, etc.)
      const existingTask = tasks.find((t) => t.id === task.id);
      if (existingTask) {
        setTasks((tasks) =>
          tasks.map((t) => {
            if (t.id === task.id) {
              return {
                ...t,
                name: task.name,
                description: task.description,
                type: task.type,
                status: task.status,
                storyPoints: task.storyPoints,
              };
            }
            return t;
          }),
        );
        return;
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

      task.repo = selectedRepo;
      task.plan = plan;
      task.currentPlanStep = 0;
      task.statusDescription = `I'm starting work on a new task. I'm starting with step 1 of the plan: '${task.plan[0]?.title}'. I'll keep you posted as I make progress!`;
      // upsert the task to the tasks array
      updateTask(task);
      // set this task as the selected task
      setSelectedTask(task);
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

    const convertPayloadToPullRequest = (
      pullRequest: PullRequest,
      parentTask: Task | undefined,
    ) => {
      if (!pullRequest) {
        return null;
      }
      if (!parentTask) {
        console.error("No parent task found for pull request: ", pullRequest);
        return;
      }

      // set the pull request to the parent task, and add the pull request to the tasks array
      parentTask.pullRequest = pullRequest;
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
      if (parentTask) {
        setSelectedTask(parentTask);
      }

      switch (eventType) {
        case InternalEventType.Task:
          convertPayloadToTask(camelCasePayload as Task);
          setSelectedIcon(SidebarIcon.Plan);

          setRecentlyUpdatedTaskIds((ids) => [...ids, camelCaseEvent.id ?? ""]);
          return;
        case InternalEventType.Command:
          convertPayloadToCommand(camelCasePayload as Command, parentTask);
          setSelectedIcon(SidebarIcon.Terminal);
          return;
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
        case InternalEventType.PullRequest:
          convertPayloadToPullRequest(
            camelCasePayload as PullRequest,
            parentTask,
          );
          setSelectedIcon(SidebarIcon.PullRequests);
          break;
        default:
          console.error("Unknown event type: ", eventType);
          return;
      }
      if (parentTask) {
        setRecentlyUpdatedTaskIds((ids) => {
          if (!ids.includes(parentTask.id)) {
            return [...ids, parentTask.id];
          }
          return ids;
        });
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
  }, [tasks, setRecentlyUpdatedTaskIds]);

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
    the chatSidebar = sidebarRef.current;
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

  const handleSend = async (message: Message) => {
    const updatedMessages = [...messages, message];

    setMessages(updatedMessages);
    setLoading(true);
    setResponding(true);
    // get the first task that is status is TaskStatus.TODO
    the task = tasks.find(
      (t) => t.status === TaskStatus.TODO && t.repo === selectedRepo,
    );
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: updatedMessages,
        prompt,
        task,
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
      for await (the chunk of runner) {
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

            if (last