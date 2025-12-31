import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }

  function decrease() {
    setNum(num - 1);
  }

  return (
    <div className="parent">
      <h1>{num}</h1>
      <div>
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  );
};

export default App;
