import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="bg-emerald-500 py-2 px-4 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home
      </button>
      <button
        className="bg-emerald-500 py-2 px-4 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-emerald-500 py-2 px-4 mt-3 ml-3 rounded cursor-pointer active:scale-95"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
