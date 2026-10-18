import React from "react";
import Rightcard from "./Rightcard";

const Rightcontent = (props) => {
  return (
    <div
      id="right"
      className="overflow-x-auto w-2/3 h-147.5 p-4 ml-10 flex gap-10"
    >
      {props.users.map(function (users, index) {
        return (
          <Rightcard
            key={index}
            index={index + 1}
            img={users.img}
            tag={users.tag}
            color={users.color}
          />
        );
      })}
    </div>
  );
};

export default Rightcontent;
