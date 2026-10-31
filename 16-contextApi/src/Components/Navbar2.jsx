import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Navbar2 = (props) => {
  const data = useContext(ThemeDataContext);

  return (
    <div className="nav2">
      <h4>Home</h4>
      <h4>About</h4>
      <h4>Contact</h4>
      <h4>Services</h4>
      <h4>{data[0]}</h4>
    </div>
  );
};

export default Navbar2;
