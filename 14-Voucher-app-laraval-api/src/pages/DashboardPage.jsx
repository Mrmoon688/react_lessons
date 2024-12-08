import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiShoppingBag, HiDocumentText } from "react-icons/hi2";
import { HiDesktopComputer } from "react-icons/hi";

const DashboardPage = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-5">
          {/* product button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<HiShoppingBag className="size-14" />}
              url={"/product"}
            />
          </div>

          {/* sale button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiDesktopComputer className="size-14" />}
              url={"/sale"}
            />
          </div>

          {/* Voucher button module */}
          <div className="col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiDocumentText className="size-14" />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
