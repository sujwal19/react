import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(3);

  function aChanging() {
    console.log("A value was changed");
  }

  function bChanging() {
    console.log("B value was changed");
  }

  useEffect(
    function () {
      aChanging();
      // console.log("useeffect is running.");
    },
    [a]
  );

  return (
    <div>
      <h3>A: {a}</h3>
      <h3>B: {b}</h3>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Change A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        Change B
      </button>
    </div>
  );
};

export default App;
