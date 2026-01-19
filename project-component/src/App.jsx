import { useState } from "react";
import Button from "./components/Button";
// import TextDisplay from "./components/TextDisplay";
// import Counter from "./components/Counter";

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  // const [input, setInput] = useState("");

  const [fruits, setFruits] = useState(["Apple", "Banana", "Mango"]);

  return (
    <div>
      {/* <Counter /> */}
      {/* <TextDisplay /> */}
      <ul>
        {fruits.map((fruit, idx) => {
          return <li key={idx}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
