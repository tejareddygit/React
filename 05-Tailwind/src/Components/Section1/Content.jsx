import React from "react";
import LeftContent from "./LeftContent";
import Rightcontent from "./Rightcontent";

const Content = (props) => {
  return (
    <div className="flex gap-10 h-full p-10 ">
      <LeftContent />
      <Rightcontent key={props.users.id} users={props.users} />
    </div>
  );
};

export default Content;
