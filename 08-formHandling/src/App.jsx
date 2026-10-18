import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    console.log("form submitted by", title);
    settitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formsubmit(e);
        }}
      >
        <input
          value={title}
          placeholder="Enter your home"
          type="text"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
