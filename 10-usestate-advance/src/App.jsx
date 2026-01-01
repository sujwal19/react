import { useState } from "react";

// const App = () => {
//   const [num, setNum] = useState({ user: "Jean", age: 24 });

//   const onBtnClick = () => {
//     // setNum((prev) => ({ ...prev, age: 21, user: "Sujwal" }));
//     const newNum = { ...num };
//     newNum.user = "Sujwal";
//     newNum.age = 22;
//     setNum(newNum);
//   };

//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={onBtnClick}>Click Me!</button>
//     </div>
//   );
// };

// export default App;

//
const App = () => {
  const [num, setNum] = useState(10);

  const onBtnClick = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={onBtnClick}>Click Me!</button>
    </div>
  );
};

export default App;
