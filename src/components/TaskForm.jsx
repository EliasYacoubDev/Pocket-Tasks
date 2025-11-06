import { useState } from "react";
import { TasksContext } from "../contexts/TasksContext";
import { useContext } from "react";

export default function TaskForm() {
  const [input, setInput] = useState("");
  const { addTask } = useContext(TasksContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Add a new task..."
        className="flex-1 border border-gray-300 rounded-lg px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                   hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
}
