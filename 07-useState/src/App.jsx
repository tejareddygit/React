import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState({ user: "Teja", age: 20 });

  function change() {
    setnum((prev) => ({ ...prev, user: "Ravi" }));
  }

  return (
    <div>
      <h1>
        {num.user},{num.age}
      </h1>

      <button onClick={change}>click</button>
    </div>
  );
};

export default App;
