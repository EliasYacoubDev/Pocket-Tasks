import { useContext } from "react";
import TaskItem from "./TaskItem";
import { TasksContext } from "../contexts/TasksContext";

export default function TaskList() {
  const { tasks } = useContext(TasksContext);
  return (
    <ul className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
