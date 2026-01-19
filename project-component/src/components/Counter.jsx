const Counter = () => {
  return (
    <main className="m-10 flex flex-col">
      <h2 className="text-9xl font-bold text-gray-500">{counter}</h2>
      <div className="flex gap-5">
        <button
          className="bg-gray-500 p-4 text-white"
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="bg-gray-500 p-4 text-white"
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
      </div>
    </main>
  );
};

export default Counter;
