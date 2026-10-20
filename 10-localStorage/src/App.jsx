import React, { use } from "react";

const App = () => {
  const userDetails = JSON.stringify(localStorage.getItem("user"));
  console.log(typeof userDetails);
  return <div>App</div>;
};

export default App;
