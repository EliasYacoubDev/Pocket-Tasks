import { createContext, useState, useEffect } from "react";

// Create context
export const TasksContext = createContext();

// Create provider wrapper
export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("pocket-tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("pocket-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: crypto.randomUUID(), text }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // expose data/functions to children
  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}
