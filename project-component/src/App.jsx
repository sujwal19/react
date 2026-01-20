import { useState } from "react";
import Button from "./components/Button";
// import TextDisplay from "./components/TextDisplay";
// import Counter from "./components/Counter";

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  // const [input, setInput] = useState("");

  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  const [color, setColor] = useState("blue");

  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const handleClick = () => {
    setColor(randomColor());
  };

  return (
    <div>
      {/* <Counter /> */}
      {/* <TextDisplay /> */}
      {/* <ul>
        {fruits.map((fruit, idx) => {
          return <li key={idx}>{fruit}</li>;
        })}
      </ul> */}
      <div
        className="m-20 flex h-100 w-100 items-end justify-center text-xl"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        {color}
      </div>
    </div>
  );
};

export default App;
