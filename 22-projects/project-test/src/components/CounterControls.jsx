const CounterControls = ({
  counter,
  steps,
  setSteps,
  onIncrement,
  onDecrement,
}) => {
  return (
    <>
      <div className="flex gap-10">
        <button
          disabled={counter >= 100}
          className="px-6 py-3 bg-amber-400 text-5xl"
          onClick={onIncrement}
        >
          +
        </button>
        <button
          disabled={counter <= 0}
          className="px-6 py-3 bg-amber-400 text-5xl"
          onClick={onDecrement}
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
    </>
  );
};

export default CounterControls;
