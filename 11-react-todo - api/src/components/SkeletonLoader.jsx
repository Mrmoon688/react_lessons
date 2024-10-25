import React from "react";

const SkeletonLoader = () => {
  return (
    <div className=" animate-pulse">
      <div className="flex justify-between items-center border-2 border-slate-500 p-3 rounded-lg mb-3 last:mb-0 shadow">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-3 w-60 items-center">
            <div className="bg-gray-400 h-5 w-5 col-span-1"></div>
            <div className="bg-gray-400 h-5 w-full rounded-full col-span-1 "></div>
          </div>
          <div className="bg-gray-400 h-10 w-20 rounded-md"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 border-slate-500 p-3 rounded-lg mb-3 last:mb-0 shadow">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-3 w-60 items-center">
            <div className="bg-gray-400 h-5 w-5 col-span-1"></div>
            <div className="bg-gray-400 h-5 w-full rounded-full col-span-1 "></div>
          </div>
          <div className="bg-gray-400 h-10 w-20 rounded-md"></div>
        </div>
      </div>

      <div className="flex justify-between items-center border-2 border-slate-500 p-3 rounded-lg mb-3 last:mb-0 shadow">
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-3 w-60 items-center">
            <div className="bg-gray-400 h-5 w-5 col-span-1"></div>
            <div className="bg-gray-400 h-5 w-full rounded-full col-span-1 "></div>
          </div>
          <div className="bg-gray-400 h-10 w-20 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
