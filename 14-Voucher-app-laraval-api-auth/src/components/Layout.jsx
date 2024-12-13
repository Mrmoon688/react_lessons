import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";

const Layout = () => {
  const [token] = useCookie("my_token");
  const { user, setUser } = useUserStore();
  const [userCookie] = useCookie("user");
  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
