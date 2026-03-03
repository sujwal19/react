import { useEffect, useState } from "react";
import { RiCloseLine, RiAddLargeLine } from "@remixicon/react";
import "remixicon/fonts/remixicon.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });

  const addTodo = (e) => {
    e.preventDefault();
    if (inputText.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };
    setTodos([newTask, ...todos]);
    setInputText("");
  };

  const deleteTodo = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const completedTodo = (selectedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === selectedTodo
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      ),
    );
  };

  const remainingTodo = todos.filter((todo) => !todo.isCompleted).length;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <section className="flex items-center justify-center">
        <div className="mt-25 flex w-1/3 flex-col justify-center">
          <h1 className="text-3xl font-bold text-[#4F4F4F]">Your To Do</h1>
          <form onSubmit={addTodo} className="mt-5 flex gap-5">
            <input
              className="w-full border-b-2 border-b-gray-500 text-[18px] text-[#4F4F4F] outline-none"
              type="text"
              placeholder="Add new task"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              className="rounded-xl bg-[#4F4F4F] px-2.5 py-2.5 text-5xl font-light text-white"
              type="submit"
            >
              <RiAddLargeLine size={21} />
            </button>
          </form>
          <div>
            <ul className="mt-6 flex flex-col gap-5">
              {todos.map((todo) => {
                return (
                  <li
                    key={todo.id}
                    className="rounded-2xl border border-gray-400 p-3.5"
                  >
                    <p className="flex w-full items-center justify-between px-1">
                      <div className="flex gap-4">
                        <input
                          className=""
                          type="checkbox"
                          value={todo.isCompleted}
                          onClick={() => {
                            completedTodo(todo.id);
                          }}
                        />
                        <span
                          className={
                            todo.isCompleted
                              ? "text-[17px] text-gray-400 line-through"
                              : "text-[17px] text-[#4F4F4F]"
                          }
                        >
                          {todo.text}
                        </span>
                      </div>
                      <span
                        onClick={() => deleteTodo(todo.id)}
                        className="cursor-pointer text-xl font-black"
                      >
                        <RiCloseLine color="#000" />
                      </span>
                    </p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 font-bold text-[#4F4F4F] italic">
              Your Remaining Todos: {remainingTodo}
            </div>
            <div className="text-m mt-3 w-[75%] text-gray-400">
              “Do the best you can until you know better. Then when you know
              better, do better.” - Maya Angelou
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
