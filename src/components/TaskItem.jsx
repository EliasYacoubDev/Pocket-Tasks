import { TasksContext } from "../contexts/TasksContext";
import { useContext } from "react";

export default function TaskItem({ task }) {
  const { deleteTask } = useContext(TasksContext);
  return (
    <li className="flex justify-between bg-gray-100 px-4 py-2 rounded-lg">
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className="text-red-600">
        Delete
      </button>
    </li>
  );
}
