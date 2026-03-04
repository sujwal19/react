import { useState, useEffect } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedData = localStorage.getItem("todos");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text, isCompleted: false };
    setTodos([newTask, ...todos]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );
  };

  const remainingCount = todos.filter((t) => !t.isCompleted).length;

  return { todos, addTodo, deleteTodo, toggleTodo, remainingCount };
};
