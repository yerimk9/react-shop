import React from "react";
import ProductSection from "../components/ProductSection";
import Carousel from "../components/Carousel";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

function MainPage() {
  return (
    <div>
      <Nav />
      <section>
        <Carousel />
        <ProductSection category="clothing" size={4}>
          패션
        </ProductSection>
        <ProductSection category="jewelery" size={4}>
          액세서리
        </ProductSection>
        <ProductSection category="electronics" size={4}>
          디지털
        </ProductSection>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
