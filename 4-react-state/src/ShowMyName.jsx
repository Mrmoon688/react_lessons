import React, { useState } from "react";

const ShowMyName = () => {
  const [name, setName] = useState("");
  const handleSaw = () => {
    setName(name + "Saw ");
    console.log("Saw");
  };

  const handleSun = () => {
    setName(name + "Sun ");
    console.log("Sun");
  };

  const handleShine = () => {
    setName(name + "Shine");
    console.log("Shine");
  };

  const handleClearName = () => {
    setName("");
  }
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5 ">My Name is "{name}"</h1>
      <div className="flex gap-4">
        <button onClick={handleSaw} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 p-2 hover:rounded-lg">
          Saw
        </button>
        <button onClick={handleSun} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 p-2 rounded-lg">
          Sun
        </button>
        <button onClick={handleShine} className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 p-2 rounded-lg">
          Shine
        </button>
        <button onClick={handleClearName} className="border border-black p-2">
          Clear Name
        </button>
      </div>
    </div>
  );
};

export default ShowMyName;
