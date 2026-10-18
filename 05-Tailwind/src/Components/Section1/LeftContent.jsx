import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className=" h-147.5 w-1/3 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl font-bold">
          Prospective <br /> <span className="text-gray-600">Customer</span>
          <br /> Segmentation
        </h1>
        <p className="text-xl text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia at
          reprehenderit possimus dolor consectetur quidem aliquam neque
          delectus, laudantium error dolores. Suscipit officiis provident
          sapiente.
        </p>
      </div>
      <div className="text-9xl">
        <i className="ri-arrow-right-up-line "></i>
      </div>
    </div>
  );
};

export default LeftContent;
