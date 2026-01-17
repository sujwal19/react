import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleTodos = () => {
    if (input.trim() === "") return;

    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, completed: true } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mt-5 w-64"
        placeholder="Enter todo"
      />
      <button
        onClick={handleTodos}
        className="ml-3 px-4 py-2 bg-cyan-500 text-white"
      >
        Add
      </button>

      <ul className="mt-5">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 text-lg border border-gray-400 p-3 flex justify-between capitalize"
          >
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              {todo.text}
            </div>
            <button
              onClick={() => {
                deleteTodo(todo.id);
                console.log("hey");
              }}
              className="ml-3 px-4 text-sm py-1.5 bg-gray-900 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
