import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useForm } from "react-hook-form";
import useCookie, { removeCookie } from "react-use-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const UserProfileChangePasswordPage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  // const { name, email, profile_image } = JSON.parse(userCookie);

  const [token] = useCookie("my_token");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const { user, setUser } = useUserStore();

  const navigate = useNavigate();
  const handleUpdatePassword = async (data) => {
    console.log(data);
    const res = await fetch(
      import.meta.env.VITE_API_URL + `/user-profile/change-password`,
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
    console.log(data);
    const json = await res.json();
    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      console.log(json.user);
      removeCookie("my_token");
      navigate("/");
      reset();
    } else {
      toast.error(json.message);
      reset();
    }
  };
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Password"}
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
        />
        <form
          onSubmit={handleSubmit(handleUpdatePassword)}
          action=""
          className="flex flex-col gap-5 border p-10 w-[50%]"
        >
          <p className="text-2xl text-center font-bold text-blue-600 mb-5">
            Change Your Password
          </p>
          <div className=" flex flex-col gap-2">
            <label htmlFor="">Old Password</label>
            <input
              type="password"
              {...register("old_password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              className={`bg-gray-50 border mt-2${
                errors.old_password
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="old password"
            />
            {errors.old_password?.type === "required" && (
              <p className="text-red-600">Old Password is required</p>
            )}
            {errors.old_password?.type === "minLength" && (
              <p className="text-red-600">Old Password must be at least 6</p>
            )}
            {errors.old_password?.type === "maxLength" && (
              <p className="text-red-600">Old Password must be at most 20</p>
            )}
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="">New Password</label>
            <input
              type="password"
              {...register("new_password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              className={`bg-gray-50 border mt-2${
                errors.new_password
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="new password"
            />
            {errors.new_password?.type === "required" && (
              <p className="text-red-600">New Password is required</p>
            )}
            {errors.new_password?.type === "minLength" && (
              <p className="text-red-600">New Password must be at least 6</p>
            )}
            {errors.new_password?.type === "maxLength" && (
              <p className="text-red-600">New Password must be at most 20</p>
            )}
          </div>
          {/* new password confirm */}
          <div className=" flex flex-col gap-2">
            <label htmlFor="">Confirm New Password</label>
            <input
              type="password"
              {...register("new_password_confirmation", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
              className={`bg-gray-50 border mt-2${
                errors.new_password_confirmation
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="new password"
            />
            {errors.new_password_confirmation?.type === "required" && (
              <p className="text-red-600">Confirm New Password is required</p>
            )}
            {errors.new_password_confirmation?.type === "minLength" && (
              <p className="text-red-600">
                Confirm New Password must be at least 6
              </p>
            )}
            {errors.new_password_confirmation?.type === "maxLength" && (
              <p className="text-red-600">
                Confirm New Password must be at most 20
              </p>
            )}
          </div>

          <button className="text-center bg-pink-600 text-white py-3">
            Update Password
          </button>
        </form>
      </Container>
    </section>
  );
};

export default UserProfileChangePasswordPage;
