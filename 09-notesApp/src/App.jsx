import React, { use, useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);

    settitle("");
    setdetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start "
      >
        <h1>Add Notes</h1>
        <input
          className="border-2   font-medium outline-none  rounded px-5 py-2 w-full"
          type="text"
          placeholder="Enter the title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        ></input>
        <textarea
          className="h-20 w-full font-medium outline-none  border-2 rounded px-5 py-2"
          type="text"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        ></textarea>
        <button className="px-5 font-medium py-2 outline-none w-full bg-white text-black rounded">
          Add
        </button>
      </form>
      <div className=" p-10  lg:w-1/2 lg:border-l-2">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded-xl text-black p-5 bg-white flex flex-col items-start justify-between "
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight text-gray-600">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="bg-red-500 rounded w-30 text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
