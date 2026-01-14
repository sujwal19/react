import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [text, setText] = useState("");

  useEffect(
    function () {
      if (!isRunning) return;

      const timer = setInterval(function () {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => clearInterval(timer);
    },
    [, isRunning]
  );

  const words = text.trim().split(/\s+/).length;

  return (
    <div>
      <main>
        <div>
          <h2>Char Count: 0</h2>
          <h2>Word Count: {words}</h2>
          <h2>Seconds: {seconds}</h2>
        </div>
        <textarea
          id="textarea"
          value={text}
          onChange={(e) => {
            setIsRunning(true);
            setText(e.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              setIsRunning(false);
              setText("");
              setSeconds(0);
            }}
          >
            Reset
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
