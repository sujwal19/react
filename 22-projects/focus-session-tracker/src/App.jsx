import { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(seconds / 60);
  const displayedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const remainingSeconds = seconds % 60;
  const displayedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  const startBtn = () => setIsRunning(true);

  const stopBtn = () => setIsRunning(false);

  useEffect(
    function () {
      if (!isRunning) {
        return;
      }

      const timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    },
    [isRunning]
  );

  useEffect(() => {
    document.title = `Focused: ${displayedMinutes} : ${displayedSeconds}`;
  }, [displayedMinutes, displayedSeconds]);

  return (
    <div className="main">
      <div className="timer">
        <h1>Focused</h1>
        <h2>
          {displayedMinutes} : {displayedSeconds}
        </h2>
        <div>
          <button onClick={startBtn}>Start</button>
          <button onClick={stopBtn}>Stop</button>
        </div>
      </div>
    </div>
  );
};

export default App;
