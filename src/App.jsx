import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <Header />
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
