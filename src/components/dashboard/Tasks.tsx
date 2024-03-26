import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export interface Task {
  id: string;
  name: string;
}

interface TasksProps {
  tasks: Task[];
  onRemove: (taskId: string) => void;
  onEdit: (taskId: string, newName: string) => void;
  onStart: (taskId: string) => void;
}

const Tasks: React.FC<TasksProps> = ({ tasks, onRemove, onEdit, onStart }) => {
  const handleDragEnd = (result: any) => {
    // TODO: Update task positions based on drag and drop result
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="h-full w-full overflow-auto bg-gray-900"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="m-2 cursor-pointer rounded bg-gray-800 p-4 shadow hover:bg-gray-700"
                  >
                    <p className="text-white">{task.name}</p>
                    <button
                      onClick={() => onRemove(task.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => onEdit(task.id, "New Task Name")}
                      className="text-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onStart(task.id)}
                      className="text-green-500"
                    >
                      Start
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tasks;
