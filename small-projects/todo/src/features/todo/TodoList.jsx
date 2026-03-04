import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <p className="mt-10 text-center text-gray-400">No tasks yet. Relax! ☕</p>
    );
  }

  return (
    <ul className="mt-6 flex flex-col gap-5">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
