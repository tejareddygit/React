import React from "react";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import { useContext } from "react";
import { ThemeDataContext } from "./Context/ThemeContext";
import Button from "./Components/Button";

const App = () => {
  return (
    <div>
      <Navbar />
      <Button />
    </div>
  );
};

export default App;
