import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-cyan-900 px-8 py-4 text-2xl justify-between">
      <h2 className="text-3xl">Sheriyans</h2>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/course">Course</Link>
        <Link to="/Product">Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
