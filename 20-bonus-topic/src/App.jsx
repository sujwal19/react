import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Navbar count={count} setCount={setCount} />
    </div>
  );
};

export default App;
