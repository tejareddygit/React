import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../Context/ThemeContext";

const Button = () => {
  const [theme, settheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    if (theme == "light") settheme("dark");
    else settheme("light");
  };
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Button;
