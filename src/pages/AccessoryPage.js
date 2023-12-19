import React from "react";
import ProductSection from "../components/ProductSection";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";

export default function AccessoryPage() {
  return (
    <div>
      <Nav />
      <section>
        <section className="sectionInner">
          <div className="category">
            <ul>
              <li>홈</li>
              <li>&nbsp; &gt; 액세서리</li>
            </ul>
          </div>
          <ProductSection category="jewelery">액세서리</ProductSection>
        </section>
      </section>
      <Footer />
    </div>
  );
}
