import React from "react";

const ProductListSkeletonLoader = () => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-300 rounded w-8"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex items-center justify-end space-x-2">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-300 rounded w-8"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex items-center justify-end space-x-2">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </td>
      </tr>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-300 rounded w-8"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-300 rounded w-48"></div>
        </th>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-300 rounded w-16 mb-1"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="flex items-center justify-end space-x-2">
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListSkeletonLoader;
