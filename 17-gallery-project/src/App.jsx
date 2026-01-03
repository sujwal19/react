import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [index, setIndex] = useState(1);

  const [userData, setUserData] = useState([]);

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=30`
    );
    setUserData(response.data);
    console.log(index);
  };

  let printUserData = (
    <h3 className="text-gray-300 absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div id={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto p-5 text-white">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {printUserData}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="px-6 py-2 bg-blue-500 active:scale-95 cursor-pointer rounded"
        >
          Prev
        </button>
        <h1 className="text-lg text-white font-semibold rounded p-2">
          Page {index}
        </h1>
        <button
          onClick={() => {
            console.log("hey", index);
            setIndex(index + 1);
            setUserData([]);
          }}
          className="px-6 py-2 bg-blue-500 active:scale-95 cursor-pointer rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
