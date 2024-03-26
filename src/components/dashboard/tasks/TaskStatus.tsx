import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { type Task } from "~/types";

// Constants for simplicity, these would be dynamically calculated in a real-world application
const SPRINT_DURATION = 10;
const DAILY_GOAL = 5;

const calculateVelocity = (tasks: Task[]): number => {
  const completedTasks = tasks.filter((task) => task.completed);
  const totalPoints = completedTasks.reduce(
    (acc, task) => acc + task.storyPoints,
    0,
  );
  return totalPoints / SPRINT_DURATION;
};

interface TaskStatusProps {
  tasks: Task[];
}

export const TaskStatus = ({ tasks }: TaskStatusProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const completedTasks = tasks.filter((task) => task.completed);
  const totalProgress = useMemo(
    () => (completedTasks.length / tasks.length) * 100,
    [tasks],
  );
  const velocity = useMemo(() => calculateVelocity(tasks), [tasks]);

  return (
    <div className="bg-blueGray-700/20 border-blueGray-700 text-blueGray-300 border-b pb-1  transition-all duration-300">
      <header className="border-blueGray-700/20 bg-blueGray-900/20 flex items-center justify-between border-b-2 px-4 py-2">
        <h2 className="text-md font-bold ">Task Progress</h2>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hover:text-green-500"
        >
          <FontAwesomeIcon
            icon={collapsed ? faChevronUp : faChevronDown}
            size="xs"
          />
        </button>
      </header>

      {!collapsed && (
        <div className="px-4 py-2">
          <div className="text-blueGray-300 mb-2 flex items-center justify-between">
            <div className="text-sm">0%</div>
            <p className="text-blueGray-400 text-[8pt]">Tasks Completed</p>
            <div className="text-sm">100%</div>
          </div>
          <div className="bg-coolGray-600 h-3 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-blueGray-700/70 rounded-md p-2 backdrop-blur-md">
              <p className=" text-[10px] text-light-blue">Sprint Progress</p>
              <p className="text-coolGray-300 text-lg font-semibold">
                {Math.round(velocity * 100)}%
              </p>
            </div>
            <div className="bg-blueGray-700/70 rounded-md p-2 backdrop-blur-md">
              <p className="text-[10px] text-orange">Task Complete</p>
              <p className="text-coolGray-300 text-lg font-semibold">
                {completedTasks.length}/{tasks.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {collapsed && (
        <div className="flex flex-row justify-center space-x-2 px-4 py-2 align-middle">
          <div className="bg-coolGray-600 mt-1 h-3 w-full overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400"
              style={{ width: `${totalProgress}%` }}
            ></div>
          </div>
          <p className="text-coolGray-300 flex h-6 w-8 items-center justify-center rounded-full bg-light-blue/50 p-1 text-[8px] font-semibold">
            {Math.round(velocity * 100)}
          </p>
          <p className="text-coolGray-900 flex h-6 w-8 items-center justify-center rounded-full bg-orange p-1 text-[8px] font-semibold">
            {completedTasks.length}/{tasks.length}
          </p>
        </div>
      )}
    </div>
  );
};
