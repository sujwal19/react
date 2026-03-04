import { useEffect, useState } from "react";

const App = () => {
  const [incNum, setIncNum] = useState(1);
  const [count, setCount] = useState(0);
  const [maxLimit, setMaxLimit] = useState(100);
  const [minLimit, setMinLimit] = useState(0);

  const inputIncrement = (e) => {
    setIncNum(Number(e.target.value));
  };

  const increment = (e) => {
    if (count + incNum > maxLimit) return;
    setCount((count) => count + incNum);
  };

  const decrement = (e) => {
    if (count - incNum < minLimit) return;
    setCount((count) => count - incNum);
  };

  const handleMaxLimitChange = (e) => {
    const val = Number(e.target.value);
    setMaxLimit(val);
    setCount((prev) => Math.min(prev, val));
  };

  const handleMinLimitChange = (e) => {
    const val = Number(e.target.value);
    setMinLimit(val);
    setCount((prev) => Math.max(prev, val));
  };

  return (
    <div className="flex h-screen w-full items-center justify-center ">
      <main className="w-100 ">
        <h1 className="text-9xl font-bold border text-gray-700 border-gray-200 py-13 text-center">
          {count}
        </h1>
        <div className="flex justify-center gap-7 mt-3">
          <button
            className="text-6xl bg-cyan-700 text-white disabled:bg-gray-400 px-8 py-2.5"
            disabled={count + incNum > maxLimit}
            onClick={increment}
          >
            +
          </button>
          <button
            className="text-6xl bg-red-500  disabled:bg-gray-400 text-white px-8 py-2.5"
            disabled={count - incNum < minLimit}
            onClick={decrement}
          >
            -
          </button>
        </div>
        <section className="flex-col flex items-center mt-5">
          <div className="flex flex-col items-center">
            <p className="text-gray-600 text-sm">Increment Limit: </p>
            <input
              type="number"
              className="border p-2 w-full rounded"
              onChange={handleMaxLimitChange}
              value={maxLimit}
            />
          </div>

          <div className="flex flex-col items-center mt-2">
            <span className="text-gray-600 text-sm">Increment By: </span>
            <input
              type="number"
              className="border border-gray-400 p-2 w-full rounded"
              onChange={inputIncrement}
            />
          </div>

          <div className="flex flex-col items-center mt-2">
            <span className="text-gray-600 text-sm"> Decrement Limit: </span>
            <input
              type="number"
              value={minLimit}
              className="border border-gray-400 p-2 w-full rounded"
              onChange={handleMinLimitChange}
            />
          </div>
        </section>
        <div className="flex justify-center mt-5">
          <button
            className="bg-gray-700 w-1/2 py-2 text-gray-50 "
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
