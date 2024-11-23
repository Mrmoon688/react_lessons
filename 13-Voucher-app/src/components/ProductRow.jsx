import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { useSWRConfig } from "swr";
import { infinity } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

infinity.register();

const ProductRow = ({ product: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  const date = new Date(created_at);
  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    // console.log(id);
    await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });
    mutate(import.meta.env.VITE_API_URL + "/products");
    toast.success(`${product_name} Deleted`);
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4 ">{id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product_name}
      </th>
      <td className="px-6 py-4 text-end">{price}</td>
      <td className="px-6 py-4 text-end">
        <p className="text-xs">{currentDate}</p>
        <p className="text-xs">{currentTime.toUpperCase()}</p>
      </td>

      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm">
          <Link
            to={`/product/edit/${id}`}
            aria-current="page"
            className="size-10 flex justify-center items-center text-sm font-medium text-blue-500 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiPencil />
          </Link>
          <a
            onClick={handleDeleteBtn}
            href="#"
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
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
          </a>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
