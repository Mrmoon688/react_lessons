import React from "react";

const VoucherListSkeletonLoader = () => {
  return (
    <tr className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
      </th>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-40 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm">
          <div className="size-10 flex justify-center items-center p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-lg">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
          <div className="size-10 flex justify-center items-center p-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-e-lg">
            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListSkeletonLoader;
