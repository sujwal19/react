import { useEffect, useState } from "react";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("medium");

  const categories = [
    { name: "high", color: "#e63946" },
    { name: "medium", color: "#f4a261" },
    { name: "low", color: "#2a9d8f" },
  ];

  function addTask(e) {
    e.preventDefault();
    if (!textInput.trim()) return;
    const newTask = {
      id: Date.now(),
      text: textInput,
      completed: false,
      category: category,
    };

    if (editId) {
      setTasks(
        tasks.map((t) =>
          t.id == editId ? { ...t, text: textInput, category: category } : t,
        ),
      );
      setEditId(null);
    } else {
      setTasks([...tasks, newTask]);
    }

    setTextInput("");
  }
  function toggleComplete(id) {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updated);
  }
  function startEdit(task) {
    console.log("Edit clicked", task);
    setEditId(task.id);
    setTextInput(task.text);
    setCategory(task.category);
  }
  function deleteTask(id) {
    const filtered = tasks.filter((task) => task.id != id);
    setTasks(filtered);
  }
  function clearCompleted() {
    const clear = tasks.filter((task) => !task.completed);
    setTasks(clear);
  }
  const filteredTasks = tasks.filter((task) => {
    if (filter == "all") return true;
    if (filter == "completed") return task.completed;
    if (filter == "pending") return !task.completed;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const CATEGORY_COLOR_CLASS = {
    High: "text-red-600",
    Medium: "text-green-600",
    Low: "text-yellow-600",
  };

  return (
    <div className="">
      <main>
        <section className="ml-10 mt-10">
          <h1>Todo's</h1>
          <form action="" onSubmit={(e) => addTask(e)}>
            <input
              type="text"
              className="border-2"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
            <button className="bg-foreground text-white">
              {editId ? "Update Task" : "Add Task"}
            </button>
            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => setCategory("high")}
                className={category == "high" ? "bg-[#e63946]" : "bg-gray-400"}
              >
                High
              </button>
              <button
                type="button"
                onClick={() => setCategory("medium")}
                className={
                  category == "medium" ? "bg-[#2a9d8f]" : "bg-gray-400"
                }
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => setCategory("low")}
                className={category == "low" ? "bg-[#e63946]" : "bg-gray-400"}
              >
                Low
              </button>
            </div>
          </form>
          <div className="taskList mt-5">
            <ol>
              <div className="flex gap-5 mb-5">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-3 py-1 rounded ${
                    filter === "all"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  All
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    filter === "completed"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setFilter("completed")}
                >
                  Completed
                </button>
                <button
                  className={`px-3 py-1 rounded ${
                    filter === "pending"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setFilter("pending")}
                >
                  Pending
                </button>
              </div>
              <button
                className="bg-foreground mb-4 text-white"
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
              {filteredTasks.map((task) => {
                return (
                  <li
                    className="text-lg flex justify-between gap-2 bg-background px-2 py-5 mb-2 items-center"
                    key={task.id}
                  >
                    <p
                      className="border border-foreground px-3 cursor-pointer"
                      onClick={() => deleteTask(task.id)}
                    >
                      D
                    </p>
                    <p
                      className="border border-foreground px-3 cursor-pointer"
                      onClick={() => toggleComplete(task.id)}
                    >
                      X
                    </p>
                    <p
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </p>
                    <p className={CATEGORY_COLOR_CLASS[task.category]}>
                      {task.category}
                    </p>
                    <button
                      onClick={() => startEdit(task)}
                      className="border-gray-800 px-2 border text-sm"
                    >
                      Edit
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
