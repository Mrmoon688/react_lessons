import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ring2 } from "ldrs";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

ring2.register();

const VoucherInfo = () => {
  const [token] = useCookie("my-token");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setIsSending(true);

    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const net_total = total + tax;

    const currentVoucher = { ...data, records, total, tax, net_total };

    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",

      body: JSON.stringify(currentVoucher),
      headers: { "Content-Type": "application/json" },
    });
    const json = await res.json();

    if (voucher_id === 201) {
      toast.success("Successfully Created New Voucher");

      resetRecord();
      reset();
      setIsSending(false);
      if (data.redirect_to_details) {
        navigate(`/voucher/detail/${json.id}`);
      }
    } else {
      toast.error(json.message);
    }
  };

  function generateInvoiceNumber() {
    //get the Current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // generate a random number
    const randomNumber = Math.floor(Math.random() * 1000000);
    // combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;
    return invoiceNumber;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="col-span-3">
        {/* // sale Form */}
        <SaleForm />
        <VoucherTable />
      </div>
      <div className="col-span-1 border p-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="infoForm"
          className="flex flex-col h-full"
        >
          <div className="grid grid-cols-1  gap-2 mb-5">
            {/* Voucher ID */}
            <div className="col-span-1">
              <div className="mb-2">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.voucher_id ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Voucher ID
                </label>
                <input
                  type="text"
                  defaultValue={generateInvoiceNumber()}
                  {...register("voucher_id", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  className={`bg-gray-50 border ${
                    errors.voucher_id
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.voucher_id?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Voucher Id is required
                  </p>
                )}
              </div>
            </div>

            {/* Customer Name */}
            <div className="col-span-1">
              <div className=" mb-2">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.customer_name ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  {...register("customer_name", {
                    required: true,
                  })}
                  className={`bg-gray-50 border ${
                    errors.customer_name
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.customer_name?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Customer Name is required
                  </p>
                )}
              </div>
            </div>

            {/* Customer Email */}
            <div className="col-span-1">
              <div className=" mb-2">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.customer_email ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Customer Email
                </label>
                <input
                  type="text"
                  {...register("customer_email", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  className={`bg-gray-50 border ${
                    errors.voucher_id
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.customer_email?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Voucher Email is required
                  </p>
                )}
              </div>
            </div>

            {/* Sale Date */}
            <div className="col-span-1">
              <div className=" mb-5">
                <label
                  className={`block mb-2 text-sm font-medium ${
                    errors.sale_date ? "text-red-500" : "text-gray-900"
                  } dark:text-white`}
                >
                  Sale Date
                </label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().slice(0, 10)}
                  {...register("sale_date", {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                  })}
                  className={`bg-gray-50 border ${
                    errors.sale_date
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                />
                {errors.sale_date?.type === "required" && (
                  <p className="text-red-500 text-sm mt-1">
                    Sale Date is required
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-end gap-5 mt-auto">
            <div className="flex items-center">
              <label
                htmlFor="redirect_to_details"
                className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Redirect to Voucher Details
              </label>

              <input
                {...register("redirect_to_details")}
                required
                form="infoForm"
                id="redirect_to_details"
                type="checkbox"
                value=""
                className={`w-4 h-4 text-blue-600 bg-gray-100${
                  errors.redirect_to_details
                    ? " border-red-300 focus:ring-red-500   dark:focus:ring-red-600"
                    : " border-gray-300 focus:ring-blue-500   dark:focus:ring-blue-600"
                } rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
              />
            </div>
            <div className="flex items-center">
              <label
                htmlFor="all-correct"
                className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Make Sure all field are correct
              </label>

              <input
                {...register("all_correct")}
                required
                form="infoForm"
                id="all-correct"
                type="checkbox"
                value=""
                className={`w-4 h-4 text-blue-600 bg-gray-100${
                  errors.all_correct
                    ? " border-red-300 focus:ring-red-500   dark:focus:ring-red-600"
                    : " border-gray-300 focus:ring-blue-500   dark:focus:ring-blue-600"
                } rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
              />
            </div>

            {/* Submit- save Product */}
            <button
              type="submit"
              form="infoForm"
              className="py-2.5 px-5 me-2 gap-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-blue-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <span>Confirm Voucher</span>
              {isSending && (
                <l-ring-2
                  size="25"
                  stroke="3"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="white"
                ></l-ring-2>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VoucherInfo;
