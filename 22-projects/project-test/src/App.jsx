import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const quotes = [
    { text: "Keep going.", author: "Unknown" },
    { text: "You can do it.", author: "Unknown" },
    { text: "Practice makes perfect.", author: "Unknown" },
  ];

  const [index, setIndex] = useState(() => {
    return Number(localStorage.getItem("quoteIndex")) || 0;
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    const savedIndex = localStorage.getItem("quoteIndex");
    if (savedIndex !== null) {
      setIndex(Number(savedIndex));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quoteIndex", index);
  }, [index]);

  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h1 className="absolute top-2">Random Quote Generator</h1>

      <p className="text-6xl font-bold mb-3">{quotes[index].text}</p>
      <p className="text-lg text-gray-600 mb-10">{quotes[index].author}</p>

      <div className="flex gap-2">
        <button
          className="p-2 bg-blue-400"
          onClick={() => {
            setIndex((prev) => (prev + 1) % quotes.length);
          }}
        >
          Next Quote
        </button>
        <button className="p-2 bg-blue-400" onClick={() => setIsRunning(true)}>
          Start Timer
        </button>
        <button className="p-2 bg-blue-400" onClick={() => setIsRunning(false)}>
          Stop Timer
        </button>
      </div>
    </div>
  );
};

export default App;
