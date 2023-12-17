import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import ProductSection from "../components/ProductSection";

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
