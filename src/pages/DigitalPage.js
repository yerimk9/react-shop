import React from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

export default function DigitalPage() {
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
          <ProductSection category="electronics">디지털</ProductSection>
        </section>
      </section>
      <Footer />
    </div>
  );
}
