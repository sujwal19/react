import { FILTERS } from "../constants";

export default function TaskFilter({ filter, setFilter }) {
  return (
    <div className="flex gap-5 mb-5">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`px-3 py-1 rounded ${
            filter === f
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setFilter(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
