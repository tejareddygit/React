import React, { use, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=16`,
    );
    setuserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printuserdata = (
    <h2 className="font-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      Loading ....
    </h2>
  );

  if (userData.length > 0) {
    printuserdata = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-50 w-45 rounded overflow-hidden" key={idx}>
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto p-4 text-white">
      <h1 className="fixed text-6xl bg-red-500">{index}</h1>
      <div className="flex p-2 flex-wrap gap-4 mb-20">{printuserdata}</div>

      <div className="flex justify-center gap-6 h-[10%] items-center pb-5">
        <button
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setuserData([]);
            }
          }}
          className="bg-amber-500 px-5 py-3 cursor-pointer rounded font-bold text-black text-lg active:scale-95 "
        >
          prev
        </button>
        <h2>Page {index}</h2>
        <button
          onClick={() => {
            setuserData([]);
            setindex(index + 1);
          }}
          className="bg-amber-500 px-5 py-3 cursor-pointer rounded font-bold text-black text-lg active:scale-95 "
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
