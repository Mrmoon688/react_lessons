import React from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import ProductEditCard from "../components/ProductEditCard";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Edit product"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
        <ProductEditCard />
      </Container>
    </section>
  );
};

export default ProductEditPage;
