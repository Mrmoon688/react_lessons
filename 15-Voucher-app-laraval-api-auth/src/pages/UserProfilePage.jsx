import React from "react";
import BreadCrumb from "./../components/BreadCrumb";
import useCookie from "react-use-cookie";
import Container from "../components/Container";
import { HiUser } from "react-icons/hi";
import { HiCamera, HiEnvelope, HiLockOpen, HiPencil } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const UserProfilePage = () => {
    const {
        user: { name, email, profile_image },
      } = useUserStore();
//   const [user] = useCookie("user"); // အချက်အလက်ယူရန်
//   const { name, email, profile_image } = JSON.parse(user); // user အချက်အလက်ထဲက name, email, profile_image ကို destructure လုပ်ပြီးယူမယ်

  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"User Profile"} />
        <div className="flex flex-col justify-center items-center border ">
          <div className="flex justify-center items-center bg-blue-600 w-full gap-5 py-10">
            <div className="flex items-end relative ">
              <img
                className="border border-white shadow-sm size-40 rounded-full object-cover object-top "
                src={
                  profile_image
                    ? profile_image
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2GfUvn3hpxoqdRIcDd85oPGRR6YJ4T8XfaotkeAL_ZtV5Ohb_jAA4oQQb66DA-jJLjY&usqp=CAU"
                }
                alt="user photo"
              />
              <Link
              to={"user-change-image"}
               className="absolute right-5 bottom-0 text-sm font-medium text-white border border-slate-300  bg-pink-700 rounded-full hover:bg-slate-400 p-2">

                <HiCamera />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-gray-100 py-10 w-full items-center justify-center ">
            <div className=" flex flex-col gap-5 justify-center items-center">
              <p className="font-bold text-2xl text-blue-700">User Profile</p>
              <div className="flex justify-between items-start gap-2">
                <button className=" text-blue-800">
                  <HiUser />
                </button>
                <p>{name}</p>
                <Link
                  to="user-change-name"
                  className="border border-gray-300 flex hover:bg-blue-100 px-1 py-0.5 text-xs rounded"
                >
                  <HiPencil />
                </Link>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button className="text-blue-800">
                <HiEnvelope />
              </button>
              <p>{email}</p>
            </div>
            <div className="">
              <Link to="user-change-password" className=" inline-flex  items-center gap-2 text-sm bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <HiLockOpen />
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserProfilePage;
