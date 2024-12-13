import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlineBackspace, HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import ProductListSkeletonLoader from "./ProductListSkeletonLoader";
import ProductListEmptyState from "./ProductListEmptyState";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import Pagination from "./Pagination";
import  useCookie  from 'react-use-cookie';


const ProductList = () => {
  const [token] = useCookie("my_token");

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products"
  );

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        // accept: "application/json",
      },
    }).then((res) => res.json());

  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  const handleSearchInput = debounce((e) => {
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`);
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };

  return (
    <div>
      <div className="flex justify-between mb-3 items-center">
        <div className=" ">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="text-gray-500 dark:text-gray-400 w-4 h-4" />
            </div>
            <input
              onChange={handleSearchInput}
              type="text"
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
              required
            />

            <button
              className="absolute right-3 top-0 m-auto bottom-0"
              // onClick={handleClearSearch}
            >
              <HiOutlineBackspace fill="white" size="20" stroke="red" />
            </button>
          </div>
        </div>
        <div className="">
          <Link
            to={"/product/create"}
            className="flex justify-center items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add New Product
            <HiPlus />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductListSkeletonLoader />
            ) : data?.data?.length === 0 ? (
              <ProductListEmptyState />
            ) : (
              data?.data?.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      )}
    </div>
  );
};

export default ProductList;
