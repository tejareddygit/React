import React from "react";
import Navbar2 from "./Navbar2";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Navbar = () => {
  const [theme, settheme] = useContext(ThemeDataContext);
  return (
    <div className={theme}>
      <h1>Sheriyans</h1>
      <Navbar2 />
    </div>
  );
};

export default Navbar;
