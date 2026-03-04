import { useState } from "react";
import { RiAddLargeLine } from "@remixicon/react";

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 flex gap-5">
      <input
        className="w-full border-b-2 border-b-gray-500 outline-none"
        placeholder="Add new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-xl bg-[#4F4F4F] p-2.5 text-white"
      >
        <RiAddLargeLine size={21} />
      </button>
    </form>
  );
};

export default TodoForm;
