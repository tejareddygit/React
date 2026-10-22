import React from "react";
import axios from "axios";

const App = () => {
  const getData = () => {
    console.log("data came");
  };
  return (
    <div className="bg-black h-screen text-white">
      <button
        onClick={getData}
        className="bg-green-600 rounded py-4 px-10 active:scale-95 m-10"
      >
        get Data
      </button>
    </div>
  );
};

export default App;
