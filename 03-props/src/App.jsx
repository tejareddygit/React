import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Teja Reddy"
        age={19}
        img="https://images.unsplash.com/photo-1788123646673-43ba43330c33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Anil Kumar"
        age={20}
        img="https://plus.unsplash.com/premium_photo-1677620678712-2be3f3849a32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
      />
    </div>
  );
};

export default App;
