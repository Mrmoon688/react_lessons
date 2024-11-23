import React from "react";
import { HiPencil, HiTrash } from "react-icons/hi2";

const VoucherListRow = ({ voucher :{id,customer_name, customer_email,sale_date}}) => {
//   console.log(voucher);
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4 ">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4 text-end">{customer_email}</td>
      <td className="px-6 py-4 text-end">
        <p className="text-xs">{sale_date}</p>
        <p className="text-xs">11:45 Am</p>
      </td>

      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm">
          <a
            href="#"
            aria-current="page"
            className="px-4 py-2 text-sm font-medium text-blue-500 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiPencil />
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiTrash />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
