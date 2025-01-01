import React, { useRef, useState } from "react";
import { HiDesktopComputer, HiSearch, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import VoucherListRow from "./VoucherListRow";
import useSWR from "swr";
import VoucherListSkeletonLoader from "./VoucherListSkeletonLoader";
import { debounce, throttle } from "lodash";
import { HiOutlineBackspace } from "react-icons/hi2";
import Pagination from "./Pagination";
import useCookie from "react-use-cookie";

const VoucherList = () => {
  const [token] = useCookie("my_token");
  const [search, setSearch] = useState("");

  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/vouchers`
  );

  const fetcher = (url) =>
    fetch(url, { headers: { Authorization: `Bearer ${token}` } }).then((res) =>
      res.json()
    );
  const updateFetchUrl = (url) => {
    setFetchUrl(url);
  };
  const searchInput = useRef("");

  //throttling & debouncing
  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`);
  }, 500);

  const handleClearSearch = (e) => {
    setSearch("");
    searchInput.current.value = "";
  };
  const { data, isLoading, error } = useSWR(fetchUrl, fetcher);

  // if (isLoading) return <p>isLoading....</p>;
  console.log(data);

  return (
    <div>
      <div className="flex justify-between mb-3 items-center">
        <div className=" ">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <HiSearch className="text-gray-500 dark:text-gray-400 w-4 h-4" />
            </div>
            <input
              ref={searchInput}
              onChange={handleSearch}
              type="text"
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
              required
            />
            {/* {search && (
              <button
                className="absolute right-3 top-0 m-auto bottom-0"
                onClick={handleClearSearch}
              >
                <HiOutlineBackspace
                  className="scale-100 active:scale-95 duration-200"
                  fill="white"
                  size="20"
                  stroke="red"
                />
              </button>
            )} */}
          </div>
        </div>
        <div className="">
          <Link
            to={"/sale"}
            className="flex justify-center items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Sale
            <HiDesktopComputer />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Voucher Id
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* empty state */}
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hidden last:table-row">
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Voucher
              </td>
            </tr>
            {isLoading ? (
              <VoucherListSkeletonLoader />
            ) : (
              data?.data?.map((voucher, index) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
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

export default VoucherList;
