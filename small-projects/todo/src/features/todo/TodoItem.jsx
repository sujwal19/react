import { RiCloseLine } from "@remixicon/react";

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li className="rounded-2xl border border-gray-400 p-3.5">
    <div className="flex w-full items-center justify-between px-1">
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggle(todo.id)}
        />
        <span
          className={
            todo.isCompleted ? "text-gray-400 line-through" : "text-[#4F4F4F]"
          }
        >
          {todo.text}
        </span>
      </div>
      <button onClick={() => onDelete(todo.id)} className="cursor-pointer">
        <RiCloseLine color="#000" />
      </button>
    </div>
  </li>
);

export default TodoItem;
