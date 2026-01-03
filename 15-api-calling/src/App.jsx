import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30"
    );
    setData(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <button onClick={getData}>GET DATA</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <div className="box">
              <h3 key={idx}>Hello, {elem.author}</h3>;
              <img src={elem.download_url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
