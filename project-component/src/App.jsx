import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(
    `"The only way of finding the limits of the possible is by going beyond them into the impossible."`,
  );
  const [author, setAuthor] = useState("Arthur C. Clarke");
  const MAX_LENGTH = 180;
  const MAX_RETRIES = 6;

  const getQuote = async () => {
    let attemps = 0;

    while (attemps < MAX_RETRIES) {
      const response = await fetch("https://thequoteshub.com/api/");
      const data = await response.json();

      if (data.text && data.text.length <= MAX_LENGTH) {
        setQuote(data.text);
        setAuthor(data.author || "Unknown");
        return;
      }
      attemps++;
    }
    setQuote(
      `"The only way of finding the limits of the possible is by going beyond them into the impossible."`,
    );
    setAuthor("Arthur C. Clarke");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-yellow-400">
      <main className="flex w-2/4 flex-col gap-10 bg-gray-100 p-10">
        <div>
          <h1 className="text-3xl font-medium">{quote}</h1>
          <p className="text-md mt-3 text-center text-gray-700">{author}</p>
        </div>

        <button className="bg-yellow-400 px-5 py-2.5" onClick={getQuote}>
          Change Quote
        </button>
      </main>
    </div>
  );
}

export default App;
