import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount(count + 1);
    console.log("U Clicked");
  };

  const handleDecreament = () => {
    setCount(count - 1);
  };
  return (
    <div className="p-10 flex flex-col ">
      <h1 className="text-9xl font-bold">{count}</h1>
      <div className="flex gap-4">
        <button
          onClick={handleDecreament}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Decrease
        </button>
        <button
          onClick={handleIncreament}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default App;
