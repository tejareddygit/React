import React from "react";

const App = () => {
  return (
    <div>
      <input
        onChange={function (e) {
          console.log(e.target.value);
        }}
        placeholder="Enter Name"
      ></input>
    </div>
  );
};

export default App;
