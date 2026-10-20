import React, { useEffect, useState } from "react";

const App = () => {
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(100);
  const num1changing = () => {
    console.log("num1 changing");
  };
  const num2changing = () => {
    console.log("num2 is changing");
  };
  useEffect(
    function () {
      num1changing();
    },
    [num1],
  );
  useEffect(
    function () {
      num2changing();
    },
    [num2],
  );
  return (
    <div>
      <h1>num1:{num1}</h1>
      <h1>num2:{num2}</h1>

      <button onClick={() => [setnum1(num1 + 1)]}>click</button>
      <button onClick={() => [setnum2(num2 + 1)]}>click</button>
    </div>
  );
};

export default App;
