import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import ProductSection from "../components/ProductSection";

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
