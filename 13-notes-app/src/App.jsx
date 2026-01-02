import { useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle("");
    setDetails("");
  };

  const deleteNotes = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className=" h-screen lg:flex bg-gray-950 text-white `text-2xl`">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 items-start lg:w-1/2 p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-full outline-0 px-4 py-4 border rounded"
        />
        <textarea
          className="w-full h-40 px-4 py-4 border rounded"
          placeholder="Enter Notes"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="bg-white active:scale-90 cursor-pointer w-full px-4 py-2 text-black rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold mb-4">Recent Notes</h1>
        <div className="flex flex-row flex-wrap items-start justify-start gap-6 h-full overflow-auto text-white">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 relative w-42 px-5 bg-cover bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] text-black rounded-xl"
              >
                <div
                  onClick={() => {
                    deleteNotes(idx);
                  }}
                  className="absolute active:scale-90 hover:scale-110 text-white bottom-2 right-2 bg-red-500 rounded-full p-1"
                >
                  <X size={16} strokeWidth={2.75} />
                </div>
                <h3 className="text-2xl leading-[1.01] font-bold mt-8">
                  {elem.title}
                </h3>
                <p className="text-m leading-[1.1] mt-2">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
