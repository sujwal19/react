import { useEffect, useState } from "react";

function App() {
  const [challengeTime, setChallengeTime] = useState(60); // default 1 min
  const [secondsLeft, setSecondsLeft] = useState(challengeTime);
  const [text, setText] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  const words = text.trim().split(/\s+/).length;
  const minutesElapsed = (challengeTime - secondsLeft) / 60;

  const wpm = minutesElapsed > 0 ? Math.floor(words / minutesElapsed) : 0;

  const percentage = ((challengeTime - secondsLeft) / challengeTime) * 100;

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    setSecondsLeft(challengeTime);
  }, [challengeTime]);

  useEffect(() => {
    document.title = `Typing Challenge: ${displayMinutes}:${displaySeconds} | WPM: ${wpm}`;
  }, [displayMinutes, displaySeconds, wpm]);

  return (
    <div>
      <h1>Typing Challenge</h1>
      <h2>
        Time : {displayMinutes} : {displaySeconds}
      </h2>
      <h3>WPM : {wpm}</h3>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <button
        onClick={() => {
          setChallengeTime(60);
          setText("");
          setIsRunning(false);
        }}
      >
        1 min
      </button>
      <button
        onClick={() => {
          setChallengeTime(180);
          setText("");
          setIsRunning(false);
        }}
      >
        3 min
      </button>
      <button
        onClick={() => {
          setChallengeTime(300);
          setText("");
          setIsRunning(false);
        }}
      >
        5 min
      </button>
      <textarea
        value={text}
        onChange={(e) => {
          if (!isRunning) setIsRunning(true);
          setText(e.target.value);
        }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          if (isRunning) setIsRunning(false);
          setText("");
          setSecondsLeft(challengeTime);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
