import React from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useTheme } from "styled-components";

export default function DigitalPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <Nav />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; 디지털</li>
            </ul>
          </div>
          <ProductSection isDarkMode={isDarkMode} category="electronics">
            디지털
          </ProductSection>
        </section>
      </section>
      <Footer />
    </div>
  );
}
