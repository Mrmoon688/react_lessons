import React, { useState } from "react";
import { HiOutlineBookOpen, HiTrash } from "react-icons/hi2";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { infinity } from "ldrs";
import { Link } from "react-router-dom";
infinity.register();

const VoucherListRow = ({
  voucher: { id, customer_name, customer_email, sale_date, voucher_id,total,created_at },
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { mutate } = useSWRConfig();

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher Deleted");
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    setIsDeleting(false);
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4 ">{id}</td>
      <td className="px-6 py-4 ">{voucher_id}</td>

      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>
      <td className="px-6 py-4 text-start">{customer_email}</td>
      <td className="px-6 py-4 text-end">{total}</td>

      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={created_at} />
      </td>

      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm">
          <Link
            to={`/voucher/detail/${id}`}
            className="size-10 flex justify-center items-center p-2 text-sm font-medium text-black bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineBookOpen />
          </Link>
          <button
            onClick={handleDeleteBtn}
            href="#"
            className="size-10 flex justify-center items-center p-2 text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-infinity
                size="25"
                stroke="3"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="1.3"
                color="red"
              ></l-infinity>
            ) : (
              <HiTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
