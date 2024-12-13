import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiShoppingBag, HiDocumentText, HiUserCircle } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";
import Logout from "../components/Logout";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-5 mb-10">
          {/* product button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<HiShoppingBag className="size-14" />}
              url={"/dashboard/product"}
            />
          </div>

          {/* sale button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiDesktopComputer className="size-14" />}
              url={"/dashboard/sale"}
            />
          </div>

          {/* Voucher button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiDocumentText className="size-14" />}
              url={"/dashboard/voucher"}
            />
          </div>
          {/* User Profile button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"User Profile"}
              icon={<HiUserCircle className="size-14" />}
              url={"/dashboard/user-profile"}
            />
          </div>
        </div>

        <div className="flex justify-end items-center gap-5">
          <p className="text-sm">
            If you finish your job , Don't forget to logout
          </p>
          <Logout />
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
