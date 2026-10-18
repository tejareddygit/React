import React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full">
      <Navbar />
      <Content key={props.users.id} users={props.users} />
    </div>
  );
};

export default Section1;
