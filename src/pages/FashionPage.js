import React from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import { useTheme } from "styled-components";

export default function FashionPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <Nav />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; 패션</li>
            </ul>
          </div>
          <ProductSection isDarkMode={isDarkMode} category="clothing">
            패션
          </ProductSection>
        </section>
      </section>
      <Footer />
    </div>
  );
}
