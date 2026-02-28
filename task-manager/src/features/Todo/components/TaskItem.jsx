import { CATEGORY_COLOR_CLASS } from "../constants";

export default function TaskItem({
  task,
  toggleComplete,
  startEdit,
  deleteTask,
}) {
  return (
    <li className="text-lg flex justify-between gap-2 bg-background px-2 py-5 mb-2 items-center">
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
      <p className={task.completed ? "line-through" : ""}>{task.text}</p>
      <p className={CATEGORY_COLOR_CLASS[task.category]}>{task.category}</p>
      <button
        onClick={() => startEdit(task)}
        className="border-gray-800 px-2 border text-sm"
      >
        Edit
      </button>
    </li>
  );
}
