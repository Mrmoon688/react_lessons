import React from "react";
import Container from "./Container";
import useCookie from "react-use-cookie";
import { json } from "react-router-dom";
import useUserStore from "../stores/useUserStore";

const Header = () => {
  // const [userCookie] = useCookie("user");

  // const { name, email, profile_image } = JSON.parse(userCookie);
  // console.log(userObj);
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <header className="mb-10">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold ">Voucher App</h1>
            <p className="text-stone-600 ">MMS Software</p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="border-2 border-white shadow-sm w-16 h-16 rounded-full object-cover object-top"
              src={
                profile_image
                  ? profile_image
                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2GfUvn3hpxoqdRIcDd85oPGRR6YJ4T8XfaotkeAL_ZtV5Ohb_jAA4oQQb66DA-jJLjY&usqp=CAU"
              }
              alt="user photo"
            />
            <div>
              <h1 className="text-lg font-bold ">{name}</h1>
              <p className="text-sm text-stone-600 ">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
