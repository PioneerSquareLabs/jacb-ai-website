// SelectedTask.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { type Task } from "~/types";

interface SelectedTaskProps {
  task: Task;
  onStart: (taskId: string) => void;
  onEdit?: (taskId: string, newName: string) => void;
}
export const SelectedTask: React.FC<SelectedTaskProps> = ({
  task,
  onStart,
  //   onEdit,
}) => (
  <div className="from-blueGray-500/50 to-coolGray-600/50 relative m-2 cursor-pointer rounded-md border-2 border-light-blue/50 bg-gradient-to-r p-3 shadow-sm shadow-dark-blue transition-all duration-300 hover:shadow-md">
    <div className="text-coolGray-50 flex items-center">
      <h3 className="truncate text-sm font-medium">{task.name}</h3>
    </div>
    <div className="mt-1 text-xs text-slate-300">{task.description}</div>
    <div className="mt-2">
      <button
        onClick={() => onStart(task.id)}
        className="text-coolGray-50 w-full justify-center rounded bg-slate-600 px-3 py-1 align-middle text-xs font-medium shadow transition duration-300 ease-in-out hover:bg-green-600"
      >
        <FontAwesomeIcon icon={faPlay} className="mb-0.5 h-2 w-2" />
        <span className="ml-1">Start</span>
      </button>
    </div>
    {/* <button
            onClick={() => onEdit(task.id, "New Task Name")}
            className="text-coolGray-300 hover:text-blueGray-300 absolute right-2 top-2 text-base transition-colors duration-200"
        >
            <FontAwesomeIcon icon={faEdit} size="xs" />
        </button> */}
  </div>
);
