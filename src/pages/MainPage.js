import React from "react";
import ProductSection from "../components/ProductSection";
import Carousel from "../components/Carousel";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useTheme } from "styled-components";

function MainPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <Nav />
      <section>
        <Carousel />
        <ProductSection isDarkMode={isDarkMode} category="clothing" size={4}>
          패션
        </ProductSection>
        <ProductSection isDarkMode={isDarkMode} category="jewelery" size={4}>
          액세서리
        </ProductSection>
        <ProductSection isDarkMode={isDarkMode} category="electronics" size={4}>
          디지털
        </ProductSection>
      </section>
      <Footer />
    </div>
  );
}

export default MainPage;
