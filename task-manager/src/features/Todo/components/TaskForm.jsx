import { CATEGORIES } from "../constants";

export default function TaskForm({
  textInput,
  setTextInput,
  category,
  setCategory,
  onSubmit,
  editId,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className="border-2"
      />
      <button className="bg-foreground text-white">
        {editId ? "Update Task" : "Add Task"}
      </button>
      <div className="flex gap-4 mt-4">
        {CATEGORIES.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "bg-[#2a9d8f]" : "bg-gray-400"}
          >
            {cat}
          </button>
        ))}
      </div>
    </form>
  );
}
