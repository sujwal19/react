import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(() => {
    return Number(localStorage.getItem("counter") || 0);
  });
  const [steps, setSteps] = useState(1);

  useEffect(() => {
    document.title = "Counter: " + counter;
    localStorage.setItem("counter", counter);
  }, [counter]);

  useEffect(() => {
    setCounter(Number(localStorage.getItem("counter") || 0));
  }, []);

  return (
    <div>
      <main className="flex h-screen w-full items-center justify-center flex-col gap-5">
        <h1 className="text-6xl font-bold text-gray-500">Counter</h1>
        <h2 className="bg-gray-200 px-13 py-4 text-9xl font-medium text-gray-600">
          {counter}
        </h2>
        <div className="flex gap-10">
          <button
            disabled={counter > 100}
            className="px-6 py-3 bg-amber-400 text-5xl"
            onClick={() => {
              setCounter((prev) => Math.min(prev + steps, 100));
            }}
          >
            +
          </button>
          <button
            disabled={counter <= 0}
            className="px-6 py-3 bg-amber-400 text-5xl"
            onClick={() => {
              setCounter((prev) => Math.max(prev - steps, 0));
            }}
          >
            -
          </button>
        </div>
        <input
          type="number"
          className="border p-3 text-3xl w-32 text-center"
          placeholder="input steps"
          value={steps}
          onChange={(e) => {
            setSteps(Number(e.target.value));
          }}
        />
        <div className="flex gap-10">
          <button
            className="px-6 py-3 bg-emerald-400 text-5xl"
            onClick={() => setSteps(1)}
          >
            1
          </button>
          <button
            className="px-6 py-3 bg-emerald-400 text-5xl"
            onClick={() => setSteps(5)}
          >
            5
          </button>
          <button
            className="px-6 py-3 bg-emerald-400 text-5xl"
            onClick={() => setSteps(10)}
          >
            10
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
