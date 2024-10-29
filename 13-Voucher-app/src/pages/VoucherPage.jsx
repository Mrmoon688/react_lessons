import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import VoucherList from "../components/VoucherList";

const VoucherPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Voucher Page"} />
        <VoucherList/>
      </Container>
    </section>
  );
};

export default VoucherPage;
