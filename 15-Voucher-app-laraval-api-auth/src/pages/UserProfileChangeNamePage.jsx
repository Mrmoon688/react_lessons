import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { HiLockOpen, HiUser } from "react-icons/hi2";
import useCookie from "react-use-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../stores/useUserStore";
import Container from "../components/Container";

const UserProfileChangeNamePage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [token] = useCookie("my_token");
  const { user, setUser } = useUserStore();

  const handleUpdateName = async (data) => {
    console.log(data);
    const res = await fetch(
      import.meta.env.VITE_API_URL + `/user-profile/change-name`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await res.json();

    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
    } else {
      toast.error(json.message);
      reset();
    }
    console.log(data);
  };
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Name"}
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
        />
        <form
          onSubmit={handleSubmit(handleUpdateName)}
          className="flex gap-5 bg-slate-400 py-16 justify-center items-end border "
        >
          <div className="">
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium ${
                errors.name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              New Name
            </label>
            <input
              type="text"
              {...register("name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className={`bg-gray-50 border mt-2${
                errors.name
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="eg. New Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm ">Product name is required</p>
            )}

            {errors.name?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Product name must longer than 3 characters.
              </p>
            )}

            {errors.name?.type === "maxLength" && (
              <p className="text-red-500 text-sm ">
                Product name must less than 10 characters.
              </p>
            )}
          </div>
          <button
            //   to={"/dashboard/user-profile"}
            type="submit"
            className=" flex justify-end items-center h-full gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded mb-0"
          >
            <HiUser />
            Update Name
          </button>
        </form>
      </Container>
    </section>
  );
};

export default UserProfileChangeNamePage;
