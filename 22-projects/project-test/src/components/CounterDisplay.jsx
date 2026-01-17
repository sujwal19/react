const CounterDisplay = ({ counter }) => {
  return (
    <>
      <h1 className="text-6xl font-bold text-gray-500">Counter</h1>
      <h2 className="bg-gray-200 px-13 flex items-center justify-center py-4 text-9xl font-medium text-gray-600">
        {counter}
      </h2>
    </>
  );
};

export default CounterDisplay;
