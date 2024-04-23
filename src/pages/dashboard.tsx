import { ChatCompletionStreamingRunner } from "openai/lib/ChatCompletionStreamingRunner";
import React, { useEffect, useRef, useState } from "react";
import { Chat } from "~/components/chat/Chat";
import Sidebar from "~/components/dashboard/Sidebar";
import Tasks from "~/components/dashboard/tasks";
import Workspace from "~/components/dashboard/workspace";
import { SAMPLE_TASKS, SidebarIcon } from "~/types";

import { type Message, type Task, Role } from "~/types";

const TOP_MENU_HEIGHT = 0;

const DEFAULT_PROMPT_1 = `
Welcome! I’m JACoB, your AI Coding Assistant. I’m focused on helping you write code. 
`;
const DEFAULT_PROMPT_2 = `What can I help you build today?`;

const DashboardPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
  const [responding, setResponding] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);

  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

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

  const onRemoveTask = (taskId: string) => {
    console.log("Removing task: ", taskId);
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId));
  };

  const onEditTask = (taskId: string, newName: string) => {
    console.log("Editing task: ", taskId);
  };

  const onStartTask = (taskId: string) => {
    console.log("Starting task: ", taskId);
  };

  console.log("tasks", tasks);

  return (
    <div className="grid h-screen w-full grid-cols-12 bg-gray-900">
      <div className="col-span-3 max-w-7xl bg-gray-900" style={{ height }}>
        <Chat
          messages={messages}
          loading={loading
          onSend={handleSend}
          onReset={handleReset}
          isResponding={responding}
          messagesEndRef={messagesEndRef}
          scrollToBottom={scrollToBottom}
          isAtBottom={isAtBottom}
          sidebarRef={sidebarRef}
          checkIfAtBottom={checkIfAtBottom}
          showInitialButtons={true}
          onButtonClick={(buttonText) => console.log(buttonText)}
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
      <div className="col-span-7 flex bg-gray-900/90">
        <Workspace tasks={tasks} />
      </div>
    </div>
  );
};

export default DashboardPage;
