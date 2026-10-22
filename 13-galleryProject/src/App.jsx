import React, { use, useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=30",
    );
    setuserData(response.data);
  };

  useEffect(function () {
    getData();
  }, []);

  let printuserdata = (
    <h2 className="font-gray-500 text-sm">No data available</h2>
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
    <div className="bg-black h-screen overflow-auto text-white">
      <div className="flex flex-wrap gap-4 ">{printuserdata}</div>

      <div className="flex justify-center gap-6 items-center pb-5">
        <button className="bg-amber-500 px-5 py-3 cursor-pointer rounded font-bold text-black text-lg active:scale-95 ">
          prev
        </button>
        <button className="bg-amber-500 px-5 py-3 cursor-pointer rounded font-bold text-black text-lg active:scale-95 ">
          next
        </button>
      </div>
    </div>
  );
};

export default App;
