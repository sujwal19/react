import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskItem from "./components/TaskItem";

export default function TodoPage() {
  const [tasks, dispatch] = useTasks();
  const [textInput, setTextInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("Medium");

  const addTask = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: textInput,
      completed: false,
      category,
    };

    if (editId) {
      dispatch({ type: "UPDATE_TASK", payload: { ...newTask, id: editId } });
      setEditId(null);
    } else {
      dispatch({ type: "ADD_TASK", payload: newTask });
    }
    setTextInput("");
  };

  const toggleComplete = (id) =>
    dispatch({ type: "TOGGLE_COMPLETE", payload: id });
  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });
  const startEdit = (task) => {
    setEditId(task.id);
    setTextInput(task.text);
    setCategory(task.category);
  };
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });

  return (
    <section className="ml-10 mt-10">
      <h1>Todo's</h1>
      <TaskForm
        textInput={textInput}
        setTextInput={setTextInput}
        category={category}
        setCategory={setCategory}
        onSubmit={addTask}
        editId={editId}
      />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <button
        className="bg-foreground mb-4 text-white"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
      <ol>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            startEdit={startEdit}
            deleteTask={deleteTask}
          />
        ))}
      </ol>
    </section>
  );
}
