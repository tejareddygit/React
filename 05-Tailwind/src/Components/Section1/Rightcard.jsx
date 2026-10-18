import React from "react";

const Rightcard = (props) => {
  console.log(props.index);
  return (
    <div className="h-full w-100 rounded-4xl  flex gap-7">
      <div
        style={{
          backgroundImage: `url(${props.img})`,
        }}
        className="w-full h-full bg-cover bg-center rounded-4xl p-10   flex flex-col "
      >
        <h1 className="bg-white text-black rounded-full w-10 h-10 text-center mb-60 p-2">
          {props.index}
        </h1>
        <div>
          <p className="text-white text-l mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            omnis libero assumenda, nulla facere optio!
          </p>
          <div className="flex gap-5">
            <button
              style={{ backgroundColor: props.color }}
              className="rounded-full w-30 text-xl items-center pb-1"
            >
              {props.tag}
            </button>
            <button
              style={{ backgroundColor: props.color }}
              className=" rounded-full w-10 text-xl items-center pb-1"
            >
              <i className="ri-arrow-right-up-line "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightcard;
