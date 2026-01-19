const TextDisplay = () => {
  return (
    <main>
      <div className="m-5">
        <input
          type="text"
          className="border-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <h4>You Typed : {input}</h4>
      </div>

      <button
        className="bg-gray-500 px-5 py-2 text-white"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        Show
      </button>
      <div className="bg-yellow-200">
        {isVisible ? <h2 className="">Hello World</h2> : ""}
      </div>
    </main>
  );
};

export default TextDisplay;
