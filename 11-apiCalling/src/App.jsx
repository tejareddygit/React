import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setdata] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );

    setdata(data);
  };
  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
        {data.map((elem, idx) => {
          return <h3 key={idx}>hello{idx}</h3>;
        })}
      </div>
    </div>
  );
};

export default App;
