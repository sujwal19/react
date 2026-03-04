import { useTodos } from "./hooks/useTodos";
import TodoForm from "./features/todo/TodoForm";
import TodoList from "./features/todo/TodoList";

const App = () => {
  const { todos, addTodo, deleteTodo, toggleTodo, remainingCount } = useTodos();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold text-[#4F4F4F]">Your To Do</h1>

        <TodoForm onAdd={addTodo} />

        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <footer className="mt-8 border-t pt-5">
          <div className="font-bold text-[#4F4F4F] italic">
            Remaining: {remainingCount}
          </div>
          <blockquote className="mt-4 text-sm leading-relaxed text-gray-400">
            “Do the best you can until you know better. Then when you know
            better, do better.”
            <span className="mt-1 block font-medium">— Maya Angelou</span>
          </blockquote>
        </footer>
      </div>
    </main>
  );
};

export default App;
