import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = ({
  links: { next, prev },
  meta: { total, to, from },
  updateFetchUrl,
}) => {
  const handleNextBtn = () => {
    updateFetchUrl(next);
  };

  const handlePrevBtn = () => {
    updateFetchUrl(prev);
  };
  return (
    <div className="flex justify-between items-center px-5">
      <span className="flex text-sm text-gray-700 dark:text-gray-400">
        Showing {from} to {to} of {total} Entries
      </span>

      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={!prev}
          onClick={handlePrevBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-gray border border-gray-200 bg-white rounded-s-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowLeft />
        </button>
        <button
          disabled={!next}
          onClick={handleNextBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-gray border border-gray-200 bg-white rounded-e-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
