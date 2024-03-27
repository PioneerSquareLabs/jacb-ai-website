import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { type Task } from "~/types";
import { SidebarIcon } from "~/types";
import { CodeComponent } from "./Code";
import { DesignComponent } from "./Design";
import { IssuesComponent } from "./Issues";
import { PlanComponent } from "./Plan";
import { PromptsComponent } from "./Prompts";
import { PullRequestsComponent } from "./PullRequests";
import { TerminalComponent } from "./Terminal";
import Sidebar from "../Sidebar";

type ComponentProps = {
  task?: Task;
};

type WorkspaceProps = {
  tasks: Task[];
};

const Workspace: React.FC<WorkspaceProps> = ({ tasks }) => {
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(
    tasks ? tasks[0] : undefined,
  );
  const [selectedIcon, setSelectedIcon] = useState<SidebarIcon>(
    SidebarIcon.None,
  );

  const renderComponent = () => {
    switch (selectedIcon) {
      case SidebarIcon.Plan:
        return <PlanComponent task={selectedTask} />;
      case SidebarIcon.Code:
        return <CodeComponent task={selectedTask} />;
      case SidebarIcon.Terminal:
        return <TerminalComponent task={selectedTask} />;
      case SidebarIcon.Issues:
        return <IssuesComponent task={selectedTask} />;
      case SidebarIcon.Design:
        return <DesignComponent task={selectedTask} />;
      case SidebarIcon.Prompts:
        return <PromptsComponent task={selectedTask} />;
      case SidebarIcon.PullRequests:
        return <PullRequestsComponent task={selectedTask} />;
      default:
        return null;
    }
  };

  const handleSelectTask = (task: Task) => {
    setSelectedTask(task);
  };

  const onIconClick = (icon: SidebarIcon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className="flex h-screen w-full flex-grow flex-col overflow-hidden">
      <div className="mt-3 flex w-full overflow-x-auto border-b border-blueGray-600 px-2">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className={`mr-2 flex flex-shrink-0 items-center rounded-t-md px-2 py-2 ${selectedTask?.id === task.id ? "bg-slate-700 text-orange" : "bg-blueGray-800 text-blueGray-500"} transition duration-300 ease-in-out hover:bg-slate-700 hover:text-orange`}
          >
            <button
              className="max-w-32 truncate text-sm"
              onClick={() => handleSelectTask(task)}
            >
              {task.name}
            </button>
            <button
              className="ml-2 h-6 w-6 text-gray-300  hover:rounded-full hover:bg-gray-500"
              onClick={() => console.log("Delete task")}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ))}
      </div>
      <div
        className="flex h-full flex-grow"
        style={{ height: "calc(100vh - 3rem)" }}
      >
        <div className="hide-scrollbar h-full w-full overflow-y-auto">
          <div className="flex h-full w-full flex-grow p-4">
            {renderComponent()}
          </div>
        </div>
        <div className="min-h-screen">
          <Sidebar selectedIcon={selectedIcon} onIconClick={onIconClick} />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
