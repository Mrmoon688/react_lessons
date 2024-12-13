import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ring2 } from "ldrs";
import toast from "react-hot-toast";
ring2.register();

const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();
  const handleCreateProduct = async (data) => {
    setIsSending(true);
    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Successfully Created New Product");

    // console.log(data);
  };
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-3 ">Create New Product</h1>
      <p className="mb-10 text-slate-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo
        corrupti expedita tempora,
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        {/* product name */}
        <div className=" mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            New Product Name
          </label>
          <input
            type="text"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. Apple"
          />
          {errors.product_name?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Product name is required
            </p>
          )}

          {errors.product_name?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Product name must longer than 3 characters.
            </p>
          )}

          {errors.product_name?.type === "maxLength" && (
            <p className="text-red-500 text-sm mt-1">
              Product name must less than 10 characters.
            </p>
          )}
        </div>

        {/* product price */}
        <div className=" mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Product Price
          </label>
          <input
            placeholder="eg. 500"
            type="number"
            {...register("price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            className={` bg-gray-50 border   ${
              errors.price
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
          />
          {errors.price?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">
              Product price is required
            </p>
          )}

          {errors.price?.type === "min" && (
            <p className="text-red-500 text-sm mt-1">
              Product price is greater than 100.
            </p>
          )}

          {errors.price?.type === "max" && (
            <p className="text-red-500 text-sm mt-1">
              Product price is Less than 10000.
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct")}
            required
            id="all-correct"
            type="checkbox"
            value=""
            className={`w-4 h-4 text-blue-600 bg-gray-100${
              errors.all_correct
                ? " border-red-300 focus:ring-red-500   dark:focus:ring-red-600"
                : " border-gray-300 focus:ring-blue-500   dark:focus:ring-blue-600"
            } rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make Sure all field are correct
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            value=""
            className={`w-4 h-4 text-blue-600 bg-gray-100${
              errors.all_correct
                ? " border-red-300 focus:ring-red-500   dark:focus:ring-red-600"
                : " border-gray-300 focus:ring-blue-500   dark:focus:ring-blue-600"
            } rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
          />
          <label
            htmlFor="back-to-product-list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to Product List after Saving
          </label>
        </div>

        <div className="flex justify-center items-center gap-3 mt-10">
          <Link
            to="/product"
            className="py-2.5 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="py-2.5 px-5 inline-flex gap-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-blue-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <span>Save Product</span>
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
  );
};

export default ProductCreateCard;
