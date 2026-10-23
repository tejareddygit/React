import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex text-4xl px-6 py-4 bg-blue-700 items-center justify-between">
      <h2>Sheriyans</h2>
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
