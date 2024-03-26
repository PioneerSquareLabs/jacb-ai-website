import React, { useState } from "react";
import {
  DragDropContext,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import Droppable from "../Droppable";

import { SelectedTask } from "./SelectedTask";
import { StandardTask } from "./StandardTask";
import { type Task } from "~/types";
import { TaskStatus } from "./TaskStatus";

const SAMPLE_TASKS: Task[] = [
  {
    id: "1",
    name: "Refactor Login Component",
    description:
      "The Login component has grown quite large and is handling too many responsibilities. It needs to be refactored into smaller, more manageable components.",
    storyPoints: 5,
    completed: true,
  },
  {
    id: "2",
    name: "Fix Bug in User Registration",
    description:
      "There's a bug in the user registration flow where the form doesn't properly validate the user's email address. This needs to be fixed.",
    storyPoints: 3,
    completed: true,
  },
  {
    id: "3",
    name: "Add Tests for Profile Page",
    description:
      "The Profile page currently has no tests. We need to add unit and integration tests to ensure it's working correctly.",
    storyPoints: 8,
    completed: false,
  },
  {
    id: "4",
    name: "Implement Dark Mode",
    description:
      "Users have been asking for a dark mode. We need to implement this across the entire application.",
    storyPoints: 3,
    completed: false,
  },
  {
    id: "5",
    name: "Optimize Image Loading",
    description:
      "Images on the site are currently loaded all at once, which is causing performance issues. We need to implement lazy loading for images.",
    storyPoints: 5,
    completed: false,
  },
];

interface TasksProps {
  tasks: Task[];
  onRemove: (taskId: string) => void;
  onEdit: (taskId: string, newName: string) => void;
  onStart: (taskId: string) => void;
}

const Tasks: React.FC<TasksProps> = ({
  tasks: _tasks,
  onRemove,
  onEdit,
  onStart,
}) => {
  const [tasks, setTasks] = useState<Task[]>(SAMPLE_TASKS);

  const handleDragEnd = (result: DropResult) => {
    console.log("Drag end", result);
    if (!result.destination) {
      return;
    }

    const newTasks = Array.from(tasks);
    const [removed] = newTasks.splice(result.source.index, 1);
    if (!removed) {
      console.log("No task removed");
      return;
    }
    newTasks.splice(result.destination.index, 0, removed);

    setTasks(newTasks);
  };

  return (
    <div className="border-coolGray-400/20 grid h-screen w-full grid-rows-[1fr_auto] border-x bg-gray-900 bg-slate-50/5">
      <div className="hide-scrollbar overflow-auto">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h2 className="mt-2 px-2 font-bold text-light-blue">
                  Current Task
                </h2>
                {tasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {index === 0 ? (
                          <>
                            <div className="border-coolGray-400/20 border-b-2 p-2">
                              <SelectedTask
                                task={task}
                                onStart={onStart}
                                onEdit={onEdit}
                              />
                            </div>
                            <h2 className="my-2 ml-2 text-sm text-indigo-100/50">
                              Upcoming Tasks
                            </h2>
                          </>
                        ) : (
                          <StandardTask task={task} />
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="border-coolGray-400/20 border-t-2 ">
        <TaskStatus tasks={tasks} />
      </div>
    </div>
  );
};

export default Tasks;

// TODO: add the delete button back in
/* <button
    onClick={() => {
    if (
        window.confirm(
        "Are you sure you want to remove this task?",
        )
    ) {
        onRemove(task.id);
    }
    }}
    className="absolute left-1 top-0 text-red-500"
>
    <FontAwesomeIcon icon={faTimes} />
</button> */
