import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ring2 } from "ldrs";
import toast from "react-hot-toast";
import useSWR from "swr";
ring2.register();

const fetcher = (url) => fetch(url).then((res) => res.json());
const ProductEditCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetcher
  );
  const [isSending, setIsSending] = useState(false);

  const navigate = useNavigate();

  const handleEditProduct = async (data) => {
    setIsSending(true);
    await fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
      method: "PUT",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        created_at: new Date().toISOString(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    setIsSending(false);
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Successfully updated Product");

    // console.log(data);
  };
  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-3 ">Create New Product</h1>
      <p className="mb-10 text-slate-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo
        corrupti expedita tempora,
      </p>
      {isLoading ? (
        <div>
          {/* product name */}
          <div className="mb-5 animate-pulse">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.product_name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              New Product Name
            </label>
            {isLoading ? (
              <div className="bg-gray-200 h-10 w-full rounded-lg animate-pulse"></div> // Skeleton loader for the input
            ) : (
              <input
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
            )}
          </div>

          {/* product price */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Price
            </label>
            {isLoading ? (
              <div className="bg-gray-200 h-10 w-full rounded-lg animate-pulse"></div> // Skeleton loader for the input
            ) : (
              <input
                className={`bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
            )}
          </div>

          {/* Checkbox 1: "Make Sure all fields are correct" */}
          <div className="flex items-center mb-4">
            {isLoading ? (
              <div className="bg-gray-200 h-4 w-4 rounded-full animate-pulse mr-2"></div> // Skeleton loader for checkbox
            ) : (
              <input
                value=""
                className={`w-4 h-4 text-blue-600 bg-gray-100  rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
              />
            )}
            {isLoading ? (
              <div className="bg-gray-200 h-4 w-32 rounded-full animate-pulse"></div> // Skeleton loader for label
            ) : (
              <label
                htmlFor="all-correct"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Make Sure all fields are correct
              </label>
            )}
          </div>

          {/* Checkbox 2: "Back to Product List after Saving" */}
          <div className="flex items-center mb-4">
            {isLoading ? (
              <div className="bg-gray-200 h-4 w-4 rounded-full animate-pulse mr-2"></div> // Skeleton loader for checkbox
            ) : (
              <input
                className={`w-4 h-4 text-blue-600 bg-gray-100 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
              />
            )}
            {isLoading ? (
              <div className="bg-gray-200 h-4 w-48 rounded-full animate-pulse"></div> // Skeleton loader for label
            ) : (
              <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Back to Product List after Saving
              </label>
            )}
          </div>

          {/* Button container */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {isLoading ? (
              <>
                <div className="bg-gray-200 h-10 w-32 rounded-lg animate-pulse"></div>{" "}
                {/* Skeleton loader for cancel button */}
                <div className="bg-blue-600 h-10 w-32 rounded-lg animate-pulse"></div>{" "}
                {/* Skeleton loader for save button */}
              </>
            ) : (
              <>
                <div className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  Cancel
                </div>
                <div className="py-2.5 px-5 inline-flex gap-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-blue-800 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"></div>
              </>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(handleEditProduct)}>
          <div className=" mb-5">
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Product Name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              defaultValue={data.product_name}
              className={`bg-gray-50 border ${
                errors.product_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg. apple"
            />
            {errors.product_name?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name is required
              </p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.product_name?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Product name must be less than 10 characters
              </p>
            )}
          </div>
          <div className=" mb-8">
            <label
              htmlFor="last_name"
              className={`block mb-2 text-sm font-medium ${
                errors.price ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Product Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: true,
                min: 100,
                max: 10000,
              })}
              defaultValue={data.price}
              className={`bg-gray-50 border ${
                errors.price
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg. 500"
            />
            {errors.price?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price is required
              </p>
            )}
            {errors.price?.type === "min" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price must be greater than 100 characters
              </p>
            )}
            {errors.price?.type === "max" && (
              <p className=" text-red-500 text-sm mt-1">
                Product price must be less than 10000 characters
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
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="all-correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make sure all field are correct
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              {...register("back_to_product_list")}
              id="back-to-product-list"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="back-to-product-list"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Back to Product List after saving
            </label>
          </div>

          <Link
            to="/product"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="text-white bg-blue-700 inline-flex gap-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <span>Update Product</span>
            {isSending && (
              <l-tailspin
                size="20"
                stroke="5"
                speed="0.9"
                color="white"
              ></l-tailspin>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductEditCard;
